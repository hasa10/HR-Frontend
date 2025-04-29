import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update',
  imports: [FormsModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {

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
  
  Update(){
    console.log(this.UpdateEmployee);
    
  this.http.put('http://localhost:8080/api/employee/update',this.UpdateEmployee).subscribe(response =>{
    console.log("Employee Updated Successfully" , response); 
    alert("Employee Updated Successfully")
  },
    error => console.error("Error Updating Employee",error)
  )
  }
  Search(){
  this.http.get<any>(`http://localhost:8080/api/employee/search?id=${this.id}`).subscribe(response =>{
    this.UpdateEmployee= {
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
