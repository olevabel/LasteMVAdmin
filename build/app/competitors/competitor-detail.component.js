System.register(['angular2/core', 'angular2/router', '../services/competitor.service'], function(exports_1, context_1) {
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
    var core_1, router_1, competitor_service_1;
    var CompetitorDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (competitor_service_1_1) {
                competitor_service_1 = competitor_service_1_1;
            }],
        execute: function() {
            CompetitorDetailComponent = (function () {
                function CompetitorDetailComponent(_competitorService, _router, _routeParams) {
                    this._competitorService = _competitorService;
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this.pageTitle = 'Võistleja andmed';
                }
                CompetitorDetailComponent.prototype.ngOnInit = function () {
                    if (!this.competitor) {
                        var id = +this._routeParams.get('id');
                        // this.pageTitle += `: ${id}`;
                        this.getCompetitor(id);
                    }
                };
                CompetitorDetailComponent.prototype.getCompetitor = function (id) {
                    var _this = this;
                    this._competitorService.getCompetitor(id)
                        .subscribe(function (competitor) { return _this.competitor = competitor; }, function (error) { return _this.errorMessage = error; });
                };
                CompetitorDetailComponent.prototype.onBack = function () {
                    this._router.navigate(['Competitors']);
                };
                CompetitorDetailComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/competitors/competitor-detail.component.html',
                    }), 
                    __metadata('design:paramtypes', [competitor_service_1.CompetitorService, router_1.Router, router_1.RouteParams])
                ], CompetitorDetailComponent);
                return CompetitorDetailComponent;
            }());
            exports_1("CompetitorDetailComponent", CompetitorDetailComponent);
        }
    }
});
