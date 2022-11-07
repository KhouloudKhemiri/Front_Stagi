import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Test1Component } from './test1/test1.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './component/home/home.component';
import { EntrepriseComponent } from './component/entreprise/entreprise.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SidbarComponent } from './component/sidbar/sidbar.component';
import { FooterComponent } from './component/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    LoginComponent,
    HomeComponent,
    EntrepriseComponent,
    NavbarComponent,
    SidbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
