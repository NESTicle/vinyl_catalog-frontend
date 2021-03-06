import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export abstract class IParameterService {
    abstract getCountries(): Observable<any>;
    abstract getGenres(getAll: boolean): Observable<any>;
    abstract getSubgenresByGenre(genreId: number): Observable<any>;
}
