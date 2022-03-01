import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/app.model';

@Injectable({
  providedIn: 'root'
})
export class AsyncTestService {
  private items = new BehaviorSubject<User[]>([]);

  constructor(private http: HttpClient) { 
    this.loadItems();
  }

  private loadItems() {
    this.http.get<User[]>('http://localhost:3000/users').subscribe(i => this.items.next(i));
  }

  getItems() {
    return this.items.asObservable();
  }

  addItem(item: User) {
    return this.http.post<User>('http://localhost:3000/users', item).subscribe(() => this.loadItems());
  }

}
