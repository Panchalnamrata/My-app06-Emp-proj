import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ReactiveFormsModule, FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmpAddComponent } from './employee/emp-add/emp-add.component';
import { EmpGetComponent } from './employee/emp-get/emp-get.component';
import {HttpClientModule} from '@angular/common/http';
import { EmployeeDeleteComponent } from './employee/emp-delete/emp-delete.component';
import { EmpEditComponent } from './employee/emp-edit/emp-edit.component';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmpAddComponent,
    EmpGetComponent,
    EmployeeDeleteComponent,
    EmpEditComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
