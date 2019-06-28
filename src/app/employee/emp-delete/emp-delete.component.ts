import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';


@Component({
  selector: 'app-emp-delete',
  templateUrl: './emp-delete.component.html',
  styleUrls: ['./emp-delete.component.css']
})
export class EmployeeDeleteComponent implements OnInit {

  constructor(private route:ActivatedRoute, private empService:EmployeeService) { }

  ngOnInit() {
    let empId=this.route.snapshot.paramMap.get("empId");
    this.deleteEmployee(empId);
  }
  deleteEmployee(empId)
  {
    this.empService.deleteEmployee(empId);
  }
}
