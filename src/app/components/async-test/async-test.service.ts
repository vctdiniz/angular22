import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/app.model';

const USERS_URL = 'http://localhost:3000/users';

@Injectable({
  providedIn: 'root'
})
export class AsyncTestService {
  private items = new BehaviorSubject<User[]>([]);

  constructor(private http: HttpClient) { 
    this.loadItems();
  }

  private loadItems() {
    this.http.get<User[]>(USERS_URL).subscribe(i => this.items.next(i));
  }

  getItems() {
    return this.items.asObservable();
  }

  addItem(item: User) {
    return this.http.post<User>(USERS_URL, item).subscribe(() => this.loadItems());
  }

  updateItem(item: User) {
    return this.http.patch<User>(USERS_URL, item).subscribe(() => this.loadItems());
  }

}
