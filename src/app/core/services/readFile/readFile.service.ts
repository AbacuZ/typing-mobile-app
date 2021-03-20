import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ReadFileService {

    private PATH = './assets/data';

    constructor(private http: HttpClient) { }

    getFile(path: any): Observable<any> {
        return this.http.get(this.PATH + '/' + path);
    }
}
