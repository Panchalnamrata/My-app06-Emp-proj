//validation

import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators} from '@angular/forms'
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-emp-add',
  templateUrl: './emp-add.component.html',
  styleUrls: ['./emp-add.component.css']
})
export class EmpAddComponent implements OnInit {
  angForm:FormGroup;
  constructor(private fb:FormBuilder, private empService:EmployeeService) { 
    this.createForm();
  }

  ngOnInit() {
  }
   createForm(){
     this.angForm=this.fb.group({
       empId:['',Validators.required], // if it is blank and validator says it is req, then it gives err
       empName:['',Validators.required],
       designation:['',Validators.required],
    });
   
  }
   addEmployee(empId,empName,designation){
     this.empService.addEmployee(empId,empName,designation);
     
   }
  

}
