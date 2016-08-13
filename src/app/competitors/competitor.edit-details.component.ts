/**
 * Created by olevabel on 8/1/16.
 */

import {ICompetitor} from "./competitor";
import {CompetitorService} from "../services/competitor.service";
import {Router, RouteParams} from "angular2/router";
import {Component, OnInit} from "angular2/core";
@Component({
    selector:'competitor-edit-details',
    templateUrl: 'app/competitor.edit-details.component.html'
})
export class CompetitorEditDetailsComponent implements OnInit{

    constructor(private _competitorService: CompetitorService,
                private _router: Router,
                private _routeParams: RouteParams) {
    }
    competitor: ICompetitor;
    errorMessage: string;

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
        this._router.navigate(['CompetitorDetail', {id: this.competitor.id}]);
    }
    submitEdition() {
        this._competitorService.editCompetitor(this.competitor);
    }

}