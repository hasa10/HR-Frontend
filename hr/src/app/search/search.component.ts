import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  id:string='';

  AddEmployee = {
    name:'',
    email:'',
    department: '',
    createdAt: '',
    updateAt: ''
  }
  
  constructor(private http:HttpClient){}
  
  Search(){
    
  this.http.get<any>(`http://localhost:8080/api/employee/search?id=${this.id}`).subscribe(response =>{
    this.AddEmployee = {
      name: response.name,
      email: response.email,
      department: response.department,
      createdAt: response.createdAt,
      updateAt: response.updateAt

    };
    console.log(response); 
  },
  error => {
      console.error(error);
      alert('Error occurred while fetching Employee data!');
    }
  
  )
  }
}
