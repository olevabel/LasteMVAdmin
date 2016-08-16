import { Injectable } from 'angular2/core';
import {Http, Response, Headers} from 'angular2/http';
import { Observable } from 'rxjs/Observable';

import { ICompetitor } from '../competitors/competitor';
import {Environment} from "./env";
import {Error} from '../util/Error';
import {RequestOptionsArgs} from "../../../build/node_modules/angular2/src/http/interfaces";
@Injectable()
export class CompetitorService {
    private _competitorUrl = Environment.api_url;
    constructor(private _http: Http) {
    }

    getCompetitors(): Observable<ICompetitor[]> {
        return this._http.get(this._competitorUrl + "/competitors")
            .map((response: Response) => <ICompetitor[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    getCompetitor(id: number): Observable<ICompetitor> {
        return this.getCompetitors()
            .map((competitors: ICompetitor[]) => competitors.find(c => c.id === id));
    }

    editCompetitor(competitor: ICompetitor): Observable<ICompetitor> {
        let requestBody = JSON.stringify(competitor);
        console.log("editCompetitor - start with competitor " + competitor.toLocaleString() );
        return this._http.put(this._competitorUrl + "/competitors", requestBody).map((response: Response) => {
            this.checkResponse(response);
            console.log("editCompetitor - response ");
            return response.json();
        }).catch(this.handleError);
    }
    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
    private checkResponse(res: Response) {
        console.log("checkResponse - start");
        if (res.status < 200 || res.status >= 300) {
            throw new Error(res.status, 'Bad response status:' + res.status);
        }
    }
}
