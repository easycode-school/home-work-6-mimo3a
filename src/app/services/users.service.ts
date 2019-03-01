import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl: string = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) { }
  public getExpl() {
    return this.http.get(`${this.apiUrl}/users`);
      }
    }
