import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './app.model';

const URL = 'http://localhost:3000/users';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  fetchAll(): Observable<User[]> {
    return this.http.get<User[]>(URL, {});
  }

  add(data: User) {
    return this.http.post<User>(URL, data);
  }
}
