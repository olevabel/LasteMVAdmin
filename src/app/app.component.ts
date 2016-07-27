import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx';   // Load all features
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { CompetitorListComponent } from './competitors/competitor-list.component';
import { CompetitorService } from './services/competitor.service';
import { WelcomeComponent } from './home/welcome.component';
import { CompetitorDetailComponent } from './competitors/competitor-detail.component';

@Component({
    selector: 'pm-app',
    template: `
    <div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['Welcome']">Avaleht</a></li>
                    <li><a [routerLink]="['Competitors']">Võistlejad</a></li>
                </ul>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
     </div>
     `,
    directives: [ROUTER_DIRECTIVES],
    providers: [CompetitorService,
                HTTP_PROVIDERS,
                ROUTER_PROVIDERS]
})
@RouteConfig([
    { path: '/welcome', name: 'Welcome', component: WelcomeComponent, useAsDefault: true },
    { path: '/competitors', name: 'Competitors', component: CompetitorListComponent },
    { path: '/competitor/:id', name: 'CompetitorDetail', component: CompetitorDetailComponent }
])
export class AppComponent {
    pageTitle: string = 'Laste mitmevõistlus';
}
