import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './view/main/main.component';
import { HeaderComponent } from './view/header/header.component';
import { FormComponent } from './view/form/form.component';
import { TaskListComponent } from './view/task-list/task-list.component';
import { TaskComponent } from './view/task/task.component';
import { LoginComponent } from './view/login/login.component';
import {RouterModule, Routes} from "@angular/router";
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import {AuthService} from "./service/auth.service";

const routes:Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/app'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'app',
    component: MainComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FormComponent,
    TaskListComponent,
    TaskComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    provideFirebaseApp(() => initializeApp({"projectId":"to-do-app-angular-577df","appId":"1:346684513128:web:c7f2646867fa421f5654dd","storageBucket":"to-do-app-angular-577df.appspot.com","apiKey":"AIzaSyBvyB9oFuQxlX_85OJhbo657_IPh62mNq4","authDomain":"to-do-app-angular-577df.firebaseapp.com","messagingSenderId":"346684513128"})),
    provideAuth(() => getAuth())
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
