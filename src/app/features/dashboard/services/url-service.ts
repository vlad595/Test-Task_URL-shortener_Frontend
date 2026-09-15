import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable, BehaviorSubject, tap } from 'rxjs';
import { UrlCreationModel, UrlResponseModel } from '../models/url.model';

@Service()
export class UrlService {
    private apiUrl = 'http://localhost:5059/api';
    private readonly http = inject(HttpClient);

    private urlsSubject = new BehaviorSubject<UrlResponseModel[]>([]);
    public links$ = this.urlsSubject.asObservable();
    
    getUrlsList(){
        return this.http.get<UrlResponseModel[]>(this.apiUrl + '/Url').subscribe({
            next: (response: UrlResponseModel[]) => {
                this.urlsSubject.next(response);
            },
            error: (error) => {
                console.error("Pulling links list error: ", error);
            }
        });
    }
    createShortUrl(urlCreation: UrlCreationModel): Observable<UrlResponseModel>{
        return this.http.post<UrlResponseModel>(this.apiUrl + '/Url', urlCreation).pipe(
            tap(url => { 
                const currentUrls = this.urlsSubject.value;
                this.urlsSubject.next([url, ...currentUrls])
            })
        );
    }
    deleteUrl(id: string): Observable<UrlResponseModel>{
        return this.http.delete<UrlResponseModel>(this.apiUrl + '/Url');
    }
}
