import { Component } from '@angular/core';
import { Test1Service } from './serv2/test1/test1.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  constructor(private testr1Service:Test1Service) { }
  user:any;
  ngOnInit(): void {
    this.all();
  }

  all(){
    this.testr1Service.GetAll().subscribe(
      resultat=>{this.user=resultat}

    )
    console.log("test=",this.user);
  }


}
