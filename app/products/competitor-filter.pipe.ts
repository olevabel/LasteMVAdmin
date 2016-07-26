import {  PipeTransform, Pipe } from 'angular2/core';
import { ICompetitor } from './competitor';

@Pipe({
    name: 'competitorFilter'
})
export class CompetitorFilterPipe implements PipeTransform {

    transform(value: ICompetitor[], args: string[]): ICompetitor[] {
        let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
        return filter ? value.filter((competitor: ICompetitor) =>
            competitor.lastname.toLocaleLowerCase().indexOf(filter) !== -1) : value;
    }
}
