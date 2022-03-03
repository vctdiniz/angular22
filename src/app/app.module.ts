import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatagridComponent } from './components/datagrid/datagrid.component';
import { DefaultComponent } from './components/default/default.component';
import { AsyncTestComponent } from './components/async-test/async-test.component';
import { NetworkInterceptor } from './network.interceptor';
import { CustomModalComponent } from './components/custom-modal/custom-modal.component';
import { ModalModule } from 'ngx-bootstrap/modal'

@NgModule({
  declarations: [
    AppComponent,
    DatagridComponent,
    DefaultComponent,
    AsyncTestComponent,
    CustomModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot({
      closeButton: true
    }),
    FormsModule,
    ModalModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: NetworkInterceptor, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
