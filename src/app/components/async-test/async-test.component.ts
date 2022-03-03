import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { User } from 'src/app/app.model';
import { LoadingService } from 'src/app/loading.service';

import { AsyncTestService } from './async-test.service';

@Component({
  selector: 'async-test',
  templateUrl: './async-test.component.html',
  styleUrls: ['./async-test.component.css']
})
export class AsyncTestComponent implements OnInit {
  items$!: Observable<any[]>;
  loading$ = this.loader.loading$;

  constructor(
    private service: AsyncTestService,
    public loader: LoadingService) { }

  ngOnInit(): void {
    this.items$ = this.service.getItems();
   }

  onClickAdd(form: NgForm) {
    this.service.addItem(form.value);
    form.reset();
  }

  onClickEdit(user: User) {
    console.log('onClickEdit >> ', user);
    this.service.updateItem(user);
  }

  onClickDelete(user: User) {
    console.log('onClickDelete >> ', user);
  }

  // test1() {
  //   const source = interval(1000);
  //   this.observable$ = source.pipe(
  //     map(value => {
  //       if (value > 2) {
  //         throw value;
  //       }
  //       return value;
  //     }),
  //     retryWhen(errors => errors.pipe(
  //       tap(v => console.log('v >> ', v)),
  //       take(2)
  //     ))
  //   );
  // }



}
