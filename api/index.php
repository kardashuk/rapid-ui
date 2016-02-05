<?php

class Api
{
    const RESPONSE_JSON = 'json';
    const REQUEST_ALL = 'all';
    const REQUEST_GET = 'all';
    const REQUEST_POST = 'all';
    const REQUEST_PUT = 'all';

    public function request($type = Api::REQUEST_ALL, $map = null){
        $requestParams = [
            'all'  => $_REQUEST,
            'post' => json_decode($_POST[0]),
            'get'  => $_GET,
            'put'  => json_decode(file_get_contents("php://input"))
        ];
        return (object)$this->parse_request_params($requestParams[$type], $map);
    }

    private function parse_request_params($data, $map){
        if ($map){
            $params = array_intersect_key($data, $map);
            foreach($map as $key => $type ){
                if (is_array($type)){
                    $params[$key] = $this->parse_request_params($data, $type);
                }else{
                    $params[$key] = ($type)$params[$key];
                }
            }
        }else{
            $params = $data;
        }
        return $params;
    }

    public function response($data, $type = Api::RESPONSE_JSON, $status = 200){
        http_response_code($status);
        if ($type === Api::RESPONSE_JSON){
            header('Content-Type: application/json');
            echo json_encode($data);
        }
    }

}

$api = new Api();




