import { User } from 'src/app/models/user';

import { LoginService } from './../../service/login/login.service';

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  constructor(private ls:LoginService) { }

  ngOnInit(): void {
 }
 UserLogin(f:NgForm){
  console.log("test")
  let id;
  let nom;
  let prenom;
  let age;
  let mail=f.value['mail'];
  let psw=f.value['passWord'];

   let u: User;
  u=new User(id,nom,prenom,age,mail,psw);
  console.log("test",u),
  this.ls.LoginUser(u).subscribe(
    (        data: any) =>{alert('valide');},
    (        error: any)=>{alert('Réviser vos donner');}

  );




}




}
