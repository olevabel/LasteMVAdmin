System.register(['angular2/core', 'angular2/http', 'rxjs/Observable', "./env", '../util/Error'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Observable_1, env_1, Error_1;
    var CompetitorService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (env_1_1) {
                env_1 = env_1_1;
            },
            function (Error_1_1) {
                Error_1 = Error_1_1;
            }],
        execute: function() {
            CompetitorService = (function () {
                function CompetitorService(_http) {
                    this._http = _http;
                    this._competitorUrl = env_1.Environment.api_url;
                    this.headers = new Head;
                }
                CompetitorService.prototype.getCompetitors = function () {
                    return this._http.get(this._competitorUrl + "/competitors")
                        .map(function (response) { return response.json(); })
                        .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
                        .catch(this.handleError);
                };
                CompetitorService.prototype.getCompetitor = function (id) {
                    return this.getCompetitors()
                        .map(function (competitors) { return competitors.find(function (c) { return c.id === id; }); });
                };
                CompetitorService.prototype.editCompetitor = function (competitor) {
                    var _this = this;
                    var requestBody = JSON.stringify(competitor);
                    return this._http.put(this._competitorUrl + "/competitors", requestBody).map(function (response) {
                        _this.checkResponse(response);
                        return response.json();
                    }).catch(this.handleError);
                };
                CompetitorService.prototype.handleError = function (error) {
                    // in a real world app, we may send the server to some remote logging infrastructure
                    // instead of just logging it to the console
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                CompetitorService.prototype.checkResponse = function (res) {
                    if (res.status < 200 || res.status >= 300) {
                        throw new Error_1.Error(res.status, 'Bad response status:' + res.status);
                    }
                };
                CompetitorService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], CompetitorService);
                return CompetitorService;
            }());
            exports_1("CompetitorService", CompetitorService);
        }
    }
});
