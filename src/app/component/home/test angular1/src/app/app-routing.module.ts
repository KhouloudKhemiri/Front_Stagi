import { EntrepriseComponent } from './component/entreprise/entreprise.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './login/login.component';
import { Test1Component } from './test1/test1.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"home",component:HomeComponent, children:[
       {path:"entreprise",component:EntrepriseComponent},
       {path:"",component:Test1Component},

  ]
},

  {path:"",component:LoginComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
