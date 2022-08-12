import { EmployeeService } from './Employee/employee.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  constructor(public employee: EmployeeService) { }
}
