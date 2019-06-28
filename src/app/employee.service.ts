import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

    editEmployee(empId: any) {
        throw new Error("Method not implemented.");
    }
  
   //default URI to call express service is: http://localhost:4000/emp

   uri='http://localhost:4000/emp';  //api url for all operations.

  constructor(public httpClient:HttpClient) { }
  
  getEmployees():Observable<Employee[]>{
   return this.httpClient.get<Employee[]>(`${this.uri}`+'/allEmp'); // " http://localhost:4000/emp" + appended url [/:empId]
                                                                                                                //  [/:empName]
                                                                                                                //[/delete/empId]
                                                                                                                //[/upadate/empId/designation]
  }

  addEmployee(id,name,desig){
    let emp={
      empId:id,
      empName:name,
      designation:desig
    }
    return this.httpClient.post(`${this.uri}`+'/addEmp',emp)
    .subscribe(res=>console.log("New Employee registered successfully"));
  }
  

  deleteEmployee(empId:number):any{
    // console.log(`${this.uri}`+'/delete/'+`${empId}`);
    this.httpClient.delete(`${this.uri}`+'/delete/'+`${empId}`)
          .subscribe(res => console.log('Done'));
  }

  updateEmployee(empId,designation):any{
    return this.httpClient.put(`${this.uri}`+'/update/'+empId+'/'+designation,{})
    .subscribe(res=>console.log(empId+"updated from database"));
  }
  
}

