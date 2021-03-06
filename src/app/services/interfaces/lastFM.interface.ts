import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export abstract class ILastFMService {
    abstract getArtistInfo(band: string): Observable<any>;
    abstract getAlbumInfo(band: string, album: string): Observable<any>;
}
