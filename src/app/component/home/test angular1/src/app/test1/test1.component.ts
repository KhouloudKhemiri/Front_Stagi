

import { Component, OnInit } from '@angular/core';
import { Test1Service } from '../serv2/test1/test1.service';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  constructor(private testr1Service:Test1Service) { }
  user:any;
  ngOnInit(): void {
    this.all();
  }

  all(){
    this.testr1Service.GetAll().subscribe(
      resultat=>{this.user=resultat}
    )
  }


}
