System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Environment;
    return {
        setters:[],
        execute: function() {
            Environment = (function () {
                function Environment() {
                }
                Environment.api_url = "";
                return Environment;
            }());
            exports_1("Environment", Environment);
        }
    }
});
