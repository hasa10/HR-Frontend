import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-delete',
  imports: [FormsModule],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {
  id:string='';

  UpdateEmployee = {
    id:this.id,
    name:'',
    email:'',
    department: '',
    createdAt: '',
    updateAt: ''
  }
  
  constructor(private http:HttpClient){}
  
  Delete(){
    console.log(this.UpdateEmployee);
    
    this.http.delete<any>(`http://localhost:8080/api/employee/delete?id=${this.id}`).subscribe(response =>{
    console.log("Employee Deleted Successfully" , response); 
    alert("Employee Deleted Successfully")
  },
    error => console.error("Error Deleting Customer",error)
  )
  }
  Search(){
  this.http.get<any>(`http://localhost:8080/api/employee/search?id=${this.id}`).subscribe(response =>{
    this.UpdateEmployee = {
      id:response.id,
      name: response.name,
      email: response.email,
      department: response.department,
      createdAt: response.createdAt,
      updateAt: response.updateAt
    };
    console.log(response); 
  },
  )
  }
}
