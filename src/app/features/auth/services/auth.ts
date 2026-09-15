import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLoginModel, UserRegistrationModel, UserResponseModel } from '../models/user.model';

@Service()
export class Auth {
    private apiUrl = 'http://localhost:5059/api';
    private httpClient: HttpClient = inject(HttpClient);

    login(user: UserLoginModel): Observable<UserResponseModel> {
        return this.httpClient.post<UserResponseModel>(this.apiUrl + '/User/login', user);
    }
    register(user: UserRegistrationModel): Observable<UserResponseModel> {
        return this.httpClient.post<UserResponseModel>(this.apiUrl + '/User/register', user);
    }
}   
