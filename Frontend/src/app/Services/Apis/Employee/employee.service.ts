import { Employee } from './../../../Models/employee.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUri: string = environment.url + '/api/' + 'Employee';

  constructor(private http: HttpClient, private fb: FormBuilder) { }

  private employee: FormGroup = this.fb.group({

    personalDetails: this.fb.group({
      firstName: ['', Validators.required],
      middleName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")],
      mobile: ['', Validators.pattern(/^[6-9]\d{9}$/)],
      dob: ['', Validators.required],
      image: ['', Validators.required],
      presentAddress: ['', Validators.required],
      permanentAddress: ['', Validators.required],
    }),

    bankDetails: this.fb.group({
      bankName: ['', Validators.required],
      accountName: ['', Validators.required],
      accountNumber: ['', Validators.required],
      ifscCode: ['', Validators.pattern("^[A-Za-z]{4}[a-zA-Z0-9]{7}$")],
      adharcard: ['', Validators.required],
      panCard: ['', Validators.required],
    }),

    professionalDetails: this.fb.group({
      designation: ['', Validators.required],
      department: ['', Validators.required],
      years: ['', Validators.required],
      months: ['', Validators.required],
      currentLocation: ['', Validators.required],
      skills: [[], Validators.required],
      resume: [''],
    }),

    educationDetails: this.fb.array([
      this.fb.group({
        educationName: ['', Validators.required],
        universityName: ['', Validators.required],
        result: ['', Validators.required],
        year: ['', Validators.required],
      })
    ]),

    experienceDetails: this.fb.array([
      this.fb.group({
        companayName: ['', Validators.required],
        position: ['', Validators.required],
        totalYear: ['', Validators.required],
        CTC: ['', Validators.required],
      })
    ]),

    currentOrganizationDetails: this.fb.group({
      joiningDate: ['', Validators.required],
      appraisalDate: ['', Validators.required],
      currentCTC: ['', Validators.required],
    })
  });

  get employeeForm() {
    return this.employee;
  }

  getAllEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUri);
  }
  getEmployee(id: string): Observable<Employee> {
    return this.http.get<Employee>(`${this.baseUri}/${id}`);
  }
  postEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.baseUri, employee);
  }
  putEmployee(id: string, employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.baseUri}/${id}`, employee);
  }
  deleteEmployee(id: string): Observable<boolean> {
    return this.http.delete<boolean>(`${this.baseUri}/${id}`);
  }
}
