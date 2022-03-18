import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
    CreateSurfcampI,
    SurfcampI,
    SurfcampLoginI,
    SurfcampLoginResponseI,
    SurfcampLoginTokenResponseI,
} from '../interfaces/surfcamps.interfaces';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    authUrl: string;
    constructor(private http: HttpClient) {
        this.authUrl = 'http://localhost:4500/auth/';
    }

    registerSurfcamp(newSurfcamp: CreateSurfcampI): Observable<SurfcampI> {
        return this.http.post<SurfcampI>(
            this.authUrl + 'surfcamps/register',
            newSurfcamp
        );
    }

    loginSurfcamp(
        credentials: SurfcampLoginI
    ): Observable<SurfcampLoginResponseI> {
        return this.http.post<SurfcampLoginResponseI>(
            this.authUrl + 'surfcamps/login',
            credentials
        );
    }

    loginToken(token: string): Observable<SurfcampLoginTokenResponseI> {
        const headers = new HttpHeaders().set(
            'Authorization',
            `Bearer ${token}`
        );
        return this.http.get<SurfcampLoginTokenResponseI>(
            this.authUrl + 'login-token',
            {
                headers: headers,
            }
        );
    }
}
