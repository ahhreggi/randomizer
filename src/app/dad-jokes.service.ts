import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class DadJokeService {

    private dadJokesUrl = 'https://icanhazdadjoke.com/';

    httpOptions = {
        headers: new HttpHeaders({ 'Accept': 'application/json' })
    }

    constructor(private http: HttpClient) { }

    getJoke() {
        return this.http.get(this.dadJokesUrl, this.httpOptions);
    }
}