import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

import { ICompetitor } from './competitor';

@Injectable()
export class CompetitorService {
    private _competitorUrl = 'api/products/products.json';

    constructor(private _http: Http) { }

    getCompetitors(): Observable<ICompetitor[]> {
        return this._http.get(this._competitorUrl)
            .map((response: Response) => <ICompetitor[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    getCompetitor(id: number): Observable<ICompetitor> {
        return this.getCompetitors()
            .map((competitors: ICompetitor[]) => competitors.find(c => c.id === id));
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
