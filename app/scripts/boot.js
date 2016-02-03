System.register(['angular2/platform/browser', './components/my-app.ts'], function(exports_1) {
    var browser_1, my_app_ts_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (my_app_ts_1_1) {
                my_app_ts_1 = my_app_ts_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(my_app_ts_1.AppComponent);
        }
    }
});
//# sourceMappingURL=boot.js.map