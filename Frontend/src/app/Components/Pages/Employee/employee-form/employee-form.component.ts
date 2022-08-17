import { Employee } from 'src/app/Models/employee.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Services } from 'src/app/Services/services.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSnackBarConfig } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { config } from 'src/app/Utils/config';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
  loader: boolean = false;
  employeeForm: FormGroup;
  employee: Employee;

  action: string;

  constructor(private $: Services, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.employeeForm = this.$.apis.employee.employeeForm;
    this.initForm();
    this.employee = new Employee();
  }

  initForm() {
    this.checkMode();
  }
  checkMode() {
    let mode = this.route.snapshot.paramMap.get('id');
    mode ? this.fillEmployee() : this.action = "Add Employee";
  }

  fillEmployee() {
    this.action = "Edit Employee";
    let id = this.route.snapshot.paramMap.get('id') as string;
    this.loader = true;
    this.$.apis.employee.getEmployee(id).subscribe({
      next: (x) => {
        this.employee = x;
        this.employeeForm.patchValue(this.employee);
        this.loader = false;

      },
      error: (err: HttpErrorResponse) => {
        this.$.snackBar.open(`${err.message}`, "", config);
        this.loader = false;

      }
    });
  }

  saveEmaployee() {
    if (this.action == "Add Employee") {
      this.loader = true;

      this.$.apis.employee.postEmployee(this.employeeForm.value).subscribe({
        next: x => {
          this.loader = false;

        },
        error: (err: HttpErrorResponse) => {
          console.log(err.message);
        },
        complete: () => {
          this.$.router.navigate(['']);
          let config: MatSnackBarConfig = {
            duration: 2000,
          };
          this.$.snackBar.open("Added!", "", config);
          this.loader = false;

        }
      });
    }
    if (this.action == "Edit Employee") {
      let id = this.route.snapshot.paramMap.get('id') as string;
      this.employee = this.employeeForm.value;
      this.employee._id = id;
      this.loader = true;
      this.$.apis.employee.putEmployee(id, this.employee).subscribe({
        next: x => {
          this.loader = false;

        },
        error: (err: HttpErrorResponse) => {
          console.log(err.message);
          this.loader = false;

        },
        complete: () => {
          this.$.router.navigate(['']);
          let config: MatSnackBarConfig = {
            duration: 2000,
          };
          this.$.snackBar.open("Updated!", "", config);
          this.loader = false;

        }
      });
    }

  }

}
