import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-all',
  imports: [NgFor],
  templateUrl: './all.component.html',
  styleUrl: './all.component.css'
})
export class AllComponent {

  employee = <any>[];

  constructor(private http:HttpClient){this.GetAll()}

GetAll(){
  this.http.get("http://localhost:8080/api/employee/all").subscribe(response =>{
    this.employee=response;
    console.log(this.employee);
})
}
}
