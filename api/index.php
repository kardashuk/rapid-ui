<?php

function cast_type($var , $type){
    if ($var === NULL) return $var;
    switch($type){
        case 'int':
        case 'integer':
            return (int)$var; break;
        case 'string':
            return (string)$var; break;
        case 'bool':
        case 'boolean':
            if ($var === 'false' || $var ==='-1' || $var ==='no') return false;
            return (bool)$var; break;
        case 'float':
        case 'double':
        case 'real':
            return (float)$var; break;
        case 'array':
            return (array)$var;break;
        case 'object':
            return (object)$var;break;
        case 'unset':
        case 'null':
            return (unset)$var;break;
    }
    return $var;
};

class Api
{
    const RESPONSE_JSON = 'json';

    const REQUEST_ALL   = 'ALL';
    const REQUEST_GET   = 'GET';
    const REQUEST_POST  = 'POST';
    const REQUEST_PUT   = 'PUT';
    const REQUEST_DELETE = 'DELETE';

    protected $config = [];
    public $DB;

    public function __construct($config){
        $this->config = $config;
    }

    public function request($type = Api::REQUEST_ALL, $map = null){
        $requestParams = [
            'ALL'   => $_REQUEST,
            'POST'  => !empty($_POST) ? json_decode($_POST[0]) : [],
            'GET'   => $_GET,
            'PUT'   => json_decode(file_get_contents("php://input")),
            'DELETE'=> null
        ];
        return (object)$this->parse_request_params($requestParams[$type], $map);
    }

    private function parse_request_params($data, $map){
        if ($map){
            $params = array_intersect_key($data, $map);
            foreach($map as $key => $options ){
                if (!isset($params[$key])){
                    $params[$key] = isset($options['default']) ? $options['default'] : null;
                }else if (is_array($options['type'])){
                    $params[$key] = $this->parse_request_params($data, $options['type']);
                }else{
                    $params[$key] = cast_type($params[$key], $options['type']);
                }
            }
        }else{
            $params = $data;
        }
        return $params;
    }

    public function response($status, $data=null, $type = Api::RESPONSE_JSON){
        http_response_code($status);
        $status_data = [
            405=>(object)['error'=>'Method Not Allowed'],
            404=>(object)['error'=>'Not Found'],
            403=>(object)['error'=>'Forbidden'],
            401=>(object)['error'=>'Unauthorized'],
            400=>(object)['error'=>'Bad Request'],
        ];
        if ($data===null && ($status<200 || $status>=300) && isset($status_data[$status])){
            $data = $status_data[$status];
        }
        if ($type === Api::RESPONSE_JSON){
            header('Content-Type: application/json');
            echo json_encode($data);
        }
    }

    public function route(){
        $result = [
            'params'   => [],
            'route'    => null,
            'method'   => $_SERVER['REQUEST_METHOD']
        ];

        $route = $this->config;

        $url_stack = preg_split('@(?=\/)@', parse_url($_SERVER['REQUEST_URI'])['path'], -1, PREG_SPLIT_NO_EMPTY);

        foreach($url_stack as $url_part){
            if (isset($route[$url_part])){
                $route = $route[$url_part];
            }else if (isset($route['/:'])){
                $route      = $route['/:'];
                $parameter  = cast_type(substr($url_part,1), $route['parameter']['type']);
                list($is_valid, $errors) = $this->validate(
                    [$route['parameter']['name']    => $parameter],
                    [$route['parameter']['name']    => $route['parameter']]
                );
                if ($is_valid){
                    $result['params'][$route['parameter']['name']] = $parameter;
                }else{
                    return $this->response(404, ['errors'=>$errors]);
                }
            }else{
                return $this->response(404);
            }
        }

        if (!empty($route['methods']) && in_array($_SERVER['REQUEST_METHOD'],$route['methods'])){
            $result['config'] = $route;
            return $this->proceed((object)$result);
        }else{
            return $this->response(405);
        }
    }

    public function proceed($route){
        $request = $this->request($route->method, $route->config['request']);
        list($is_valid, $errors) = $this->validate($request, $route->config['request']);
        $this->response(
            $is_valid ? 200 : 400,
            [
                '$routeParams'  => $route->params,
                '$routeConfig'  => $route->config,
                '$request'      => $request,
                '$is_valid'     => $is_valid,
                '$errors'       => $errors,
            ]
        );
    }

    public function validate($request, $options, &$errors = null, $error_prefix=''){
        $result = true;
        $errors = $errors || [];
        $proceed_error = function($key, $errorType, $data=null) use (&$result, &$errors, $error_prefix){
            $errorMsgs = [
                'required'=>'This field is required.',
                'minlength'=>'Should be minimum %d characters long.',
                'maxlength'=>'Should be less then %d characters long.',
                'length'=>'Should be %d characters long.',
                'gt'=>'This field should be grater then %s.',
                'lt'=>'This field should be less then %s.',
                'gte'=>'This field should not be less then %s.',
                'lte'=>'This field should not be grated then %s.'
            ];
            $result = false;
            $errors[$error_prefix.$key] = sprintf($errorMsgs[$errorType], $data);
        };
        foreach($request as $key=>$val){
            if (is_array($val) && isset($options[$key])){
                $result = $result && $this->validate($request[$key], $options[$key], $errors, $key.'.');
            }else if (isset($options[$key])){
                if (isset($options[$key]['required']) && $options[$key]['required'] && !$val){
                    $proceed_error($key, 'required');
                }
                if (isset($options[$key]['gt']) && $val <= $options[$key]['gt']){
                   $proceed_error($key, 'gt', $options[$key]['gt']);
                }
                if (isset($options[$key]['gte']) && $val < $options[$key]['gte']){
                     $proceed_error($key, 'gte', $options[$key]['gte']);
                }
                if (isset($options[$key]['lt']) && $val >= $options[$key]['lt']){
                    $proceed_error($key, 'lt', $options[$key]['lt']);
                }
                if (isset($options[$key]['lte']) && $val > $options[$key]['lte']){
                   $proceed_error($key, 'lte', $options[$key]['lte']);
                }
                if (isset($options[$key]['length']) && strlen($val) !== $options[$key]['length']){
                    $proceed_error($key, 'length', $options[$key]['length']);
                }
                if (isset($options[$key]['minlength']) && strlen($val)< $options[$key]['minlength']){
                    $proceed_error($key, 'minlength', $options[$key]['minlength']);
                }
                if (isset($options[$key]['maxlength']) && strlen($val) > $options[$key]['maxlength']){
                    $proceed_error($key, 'maxlength', $options[$key]['maxlength']);
                }
            }
        }
        return [$result, $errors];
    }
};

$config = [
    '/test'=>[
        'methods'=>['GET'],
        '/:'=>[
            'parameter'=>[
                'name'=>'me',
                'type'=>'string',
                'minlength'=>'3'
            ],
            'methods'=>['PUT','GET'],
            'request'=>[
                'page'=>[
                    'type' => 'int',
                    'default' => 1,
                    'gte'      => 1
                ]
            ]
        ]
    ],
    '/:'=>[
        'parameter'=>[
            'name'=>'some_url',
            'type'=>'int'
        ],
        '/data'=>[
            'methods'=>['GET']
        ]
    ]
];

$api = new Api($config);
$api->DB = (new MongoClient())->selectDB('test');
$api->route();
