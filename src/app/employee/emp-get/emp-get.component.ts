import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-emp-get',
  templateUrl: './emp-get.component.html',
  styleUrls: ['./emp-get.component.css']
})
export class EmpGetComponent implements OnInit {
  employees:Employee[]=[];
  selectedEmp:Employee;


  constructor(private route:ActivatedRoute,
    private service:EmployeeService) { }

  ngOnInit() {
    this.service.getEmployees().subscribe(employeeList=>this.employees=employeeList); //Injection of data into Employee[]

  // data is taken into employees obj.
  }

  onSelection(emp:Employee){
    this.selectedEmp=emp;
  }

}
