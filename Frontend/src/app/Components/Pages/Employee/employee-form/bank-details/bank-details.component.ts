import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Services } from 'src/app/Services/services.service';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.scss']
})
export class BankDetailsComponent implements OnInit {

  employeeForm: FormGroup;

  constructor(private $: Services) { }

  ngOnInit(): void {
    this.employeeForm = this.$.apis.employee.employeeForm.controls['bankDetails'] as FormGroup;
  }
}
