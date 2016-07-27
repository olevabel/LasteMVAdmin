import {Component, OnInit}  from 'angular2/core';
import {ROUTER_DIRECTIVES, Router, RouteParams} from 'angular2/router';

import {ICompetitor} from './competitor';
import {CompetitorFilterPipe} from './competitor-filter.pipe';
import {CompetitorService} from '../services/competitor.service';

@Component({
    templateUrl: 'app/competitors/competitor-list.component.html',
    styleUrls: ['app/competitors/competitor-list.component.css'],
    pipes: [CompetitorFilterPipe],
    directives: [ROUTER_DIRECTIVES]
})
export class CompetitorListComponent implements OnInit {
    pageTitle:string = 'Võistlejad';
    listFilter:string = '';
    errorMessage:string;
    competitors:ICompetitor[];

    constructor(private _competitorService:CompetitorService, private _router:Router, private _routeParams:RouteParams) {

    }

    ngOnInit():void {
        this._competitorService.getCompetitors()
            .subscribe(
                competitors => this.competitors = competitors,
                error => this.errorMessage = <any>error);
    }

    onClick(competitor:ICompetitor):void {
        this._router.navigate(['CompetitorDetail',{id: competitor.id}]);
    }

}
