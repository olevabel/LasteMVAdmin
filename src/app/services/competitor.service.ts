import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

import { ICompetitor } from '../competitors/competitor';
import {Environment} from "./env";
import {IResult} from "../results/IResult";

@Injectable()
export class CompetitorService {
    constructor(private _http: Http) { }

    getCompetitors(): Observable<IResult[]> {
        return this._http.get("https://lastemv.herokuapp.com/results")
            .map((response: Response) => <IResult[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    getCompetitor(id: number): Observable<IResult> {
        return this.getCompetitors()
            .map((competitors: IResult[]) => competitors.find(c => c.id === id));
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
