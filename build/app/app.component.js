System.register(['angular2/core', 'angular2/http', 'rxjs/Rx', 'angular2/router', './competitors/competitor-list.component', './services/competitor.service', './home/welcome.component', './competitors/competitor-detail.component'], function(exports_1, context_1) {
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
    var core_1, http_1, router_1, competitor_list_component_1, competitor_service_1, welcome_component_1, competitor_detail_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (competitor_list_component_1_1) {
                competitor_list_component_1 = competitor_list_component_1_1;
            },
            function (competitor_service_1_1) {
                competitor_service_1 = competitor_service_1_1;
            },
            function (welcome_component_1_1) {
                welcome_component_1 = welcome_component_1_1;
            },
            function (competitor_detail_component_1_1) {
                competitor_detail_component_1 = competitor_detail_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.pageTitle = 'Laste mitmevõistlus';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'pm-app',
                        template: "\n    <div>\n        <nav class='navbar navbar-default'>\n            <div class='container-fluid'>\n                <ul class='nav navbar-nav'>\n                    <li><a [routerLink]=\"['Welcome']\">Avaleht</a></li>\n                    <li><a [routerLink]=\"['Competitors']\">V\u00F5istlejad</a></li>\n                </ul>\n            </div>\n        </nav>\n        <div class='container'>\n            <router-outlet></router-outlet>\n        </div>\n     </div>\n     ",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [competitor_service_1.CompetitorService,
                            http_1.HTTP_PROVIDERS,
                            router_1.ROUTER_PROVIDERS]
                    }),
                    router_1.RouteConfig([
                        { path: '/welcome', name: 'Welcome', component: welcome_component_1.WelcomeComponent, useAsDefault: true },
                        { path: '/competitors', name: 'Competitors', component: competitor_list_component_1.CompetitorListComponent },
                        { path: '/competitor/:id', name: 'CompetitorDetail', component: competitor_detail_component_1.CompetitorDetailComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
