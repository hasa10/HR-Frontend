import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-add',
  imports: [FormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {

AddEmployee = {
  name:'',
  email:'',
  department: '',
  createdAt: '',
  updateAt: ''
}

constructor(private http:HttpClient){}

Save(){
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!this.AddEmployee.name || !this.AddEmployee.email || !this.AddEmployee.department) {
    alert('Please fill all required fields');
    return;
  }

  if (!emailPattern.test(this.AddEmployee.email)) {
    alert('Please enter a valid email address');
    return;
  }
  console.log(this.AddEmployee);
  
this.http.post('http://localhost:8080/api/employee/add',this.AddEmployee).subscribe(response =>{
  console.log("Employee Added Successfully" , response);
  alert("Employee Added Successfully")
},
  error => console.error("Error Adding Customer",error)
)
}

}
