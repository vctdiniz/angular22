import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.css']
})
export class CustomModalComponent implements OnInit {
  title?: string;
  closeBtnName?: string;
  list: any[] = [];

  constructor(private bsModalRef: BsModalRef) { }

  ngOnInit(): void {
    this.list
  }

}
