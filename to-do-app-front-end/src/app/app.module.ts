import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './view/main/main.component';
import { HeaderComponent } from './view/header/header.component';
import { FormComponent } from './view/form/form.component';
import { TaskListComponent } from './view/task-list/task-list.component';
import { TaskComponent } from './view/task/task.component';
import { LoginComponent } from './view/login/login.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import {AuthService} from "./service/auth.service";
import {authGuard} from "./guard/auth.guard";
import { LoaderComponent } from './view/loader/loader.component';
import {TaskService} from "./service/task-service";
import {HttpClientModule, provideHttpClient, withInterceptors} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {SpringTaskService} from "./service/spring-task.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import {errorInterceptor} from "./interceptor/error.interceptor";
import {RoutingModule} from "./routing.module";




@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FormComponent,
    TaskListComponent,
    TaskComponent,
    LoginComponent,
    LoaderComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RoutingModule,
    provideFirebaseApp(() => initializeApp({
      "projectId": "to-do-app-angular-577df",
      "appId": "1:346684513128:web:c7f2646867fa421f5654dd",
      "storageBucket": "to-do-app-angular-577df.appspot.com",
      "apiKey": "AIzaSyBvyB9oFuQxlX_85OJhbo657_IPh62mNq4",
      "authDomain": "to-do-app-angular-577df.firebaseapp.com",
      "messagingSenderId": "346684513128"
    })),
    provideAuth(() => getAuth()),
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      enableHtml: true,
      positionClass: 'toast-bottom-center',
      preventDuplicates: true,
      progressBar: true,
      timeOut: 1500
    })

  ],
  providers: [AuthService,{provide: TaskService, useClass: SpringTaskService}
    , provideHttpClient(withInterceptors([errorInterceptor]))],
  bootstrap: [AppComponent]
})
export class AppModule { }
