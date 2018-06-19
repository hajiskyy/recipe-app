import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from "../environments/environment";
import { RecepiesService } from "./services/recepies.service";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedComponent } from './components/feed/feed.component';
import { RecepiesComponent } from './components/recepies/recepies.component';
import { RecepieDetailComponent } from './components/recepie-detail/recepie-detail.component';
import { AccountDetailComponent } from './components/account-detail/account-detail.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { AddRecepieFormComponent } from './components/add-recepie-form/add-recepie-form.component';
import { EditRecepieFormComponent } from './components/edit-recepie-form/edit-recepie-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    RecepiesComponent,
    RecepieDetailComponent,
    AccountDetailComponent,
    LoginFormComponent,
    RegisterFormComponent,
    AddRecepieFormComponent,
    EditRecepieFormComponent,
    NavbarComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule
  ],
  providers: [
    RecepiesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
