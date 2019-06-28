import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-emp-edit',
  templateUrl: './emp-edit.component.html',
  styleUrls: ['./emp-edit.component.css']
})
export class EmpEditComponent implements OnInit {
  @Input()
  employee:Employee;
  constructor(private route:ActivatedRoute,private service:EmployeeService) { }

  ngOnInit() {
  }
  updateEmployee(empId:any,desig:any){
    this.service.updateEmployee(empId,desig);
  }

}
