import { RegisterService } from './../../service/register/register.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private registerservice:RegisterService) { }

  ngOnInit(): void {
  }
  ajouter(f:NgForm){
let id=f.value['id'];
let nom=f.value['nom'];
let prenom=f.value['prenom'];
let age=f.value['age'];
let mail=f.value['email'];
let psw=f.value['psw'];

 let u: User;
u=new User(id,nom,prenom,age,mail,psw);
console.log("test",u),
this.registerservice.AddUser(u).subscribe(

  data =>{alert('Inscription valide');},
  error=>{alert('Réviser vos donné');}

);

  }

  }


