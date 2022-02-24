import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from 'src/app/app.model';
import { AppService } from 'src/app/app.service';
import { NotificationService } from 'src/app/notification.service';

@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.css']
})
export class DatagridComponent implements OnInit {
  observableData$ = new Observable<User[]>();

  constructor(private service: AppService, private notifyService: NotificationService) { }

  ngOnInit(): void {
    this.observableData$ = this.service.fetchAll();
  }

  onSubmit(form: NgForm) {
    this.service.add(form.value).subscribe({
      next: (response: any) => {
        console.log('response >>', response);
        this.notifyService.showSuccess('Usuário adicionado!', '');
      },
      error: (error: any) => {
        console.log('error >>', error);
        this.notifyService.showError('Ocorreu um erro ao adicionar o usuário!', '');
      }
    });
  }

}
