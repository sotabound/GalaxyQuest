// this is our Service
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IGalaxy } from "./galaxies";
import { catchError, Observable, tap, throwError } from "rxjs";


@Injectable({
    //This is the way to provide a service for the entire app
    providedIn: 'root'
})
export class GalaxyService {
    private galaxyUrl = 'api/galaxies.json';
    constructor(private http: HttpClient){}

    // tap is great to use for debugging
    getGalaxies(): Observable<IGalaxy[]> {
        return this.http.get<IGalaxy[]>(this.galaxyUrl).pipe(
            // Use JSON Stringify for the error
            tap(data => console.log('All: ', JSON.stringify(data))),
            catchError(this.handleError)
        );
    }
    // Use the error handling method!
    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {

            errorMessage = `An Error occured: ${err.error.message}`;
        }   else {
            errorMessage = `Server returned code: ${err.status}, error meesage is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(()=>errorMessage);

    }
}