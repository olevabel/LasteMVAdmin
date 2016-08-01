import { Component, OnInit } from 'angular2/core';
import { RouteParams, Router } from 'angular2/router';

import { ICompetitor } from './competitor';
import { CompetitorService } from '../services/competitor.service';

@Component({
    templateUrl: 'app/competitors/competitor-detail.component.html',
})
export class CompetitorDetailComponent implements OnInit {
    pageTitle: string = 'Võistleja andmed';
    competitor: ICompetitor;
    errorMessage: string;

    constructor(private _competitorService: CompetitorService,
        private _router: Router,
        private _routeParams: RouteParams) {
    }

    ngOnInit() {
        if (!this.competitor) {
            let id = +this._routeParams.get('id');
            // this.pageTitle += `: ${id}`;
            this.getCompetitor(id);
        }
    }

    getCompetitor(id: number) {
        this._competitorService.getCompetitor(id)
            .subscribe(
            competitor => this.competitor = competitor,
            error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this._router.navigate(['Competitors']);
    }

    onEdit(): void {
        this._router.navigate(['CompetitorEditDetails', {id: this.competitor.id}]);
    }

}
