import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
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

  constructor(private service: AsyncTestService, public loader: LoadingService) {
    this.items$ = this.service.getItems();
  }

  ngOnInit(): void { }

  onClickAdd(form: NgForm) {
    this.service.addItem(form.value);
    form.reset();
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
