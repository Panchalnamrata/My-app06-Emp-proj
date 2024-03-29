import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDeleteComponent } from './emp-delete.component';

describe('EmpDeleteComponent', () => {
  let component: EmployeeDeleteComponent;
  let fixture: ComponentFixture<EmployeeDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
