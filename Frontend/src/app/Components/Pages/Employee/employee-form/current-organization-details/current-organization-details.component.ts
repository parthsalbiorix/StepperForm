import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Services } from 'src/app/Services/services.service';

@Component({
  selector: 'app-current-organization-details',
  templateUrl: './current-organization-details.component.html',
  styleUrls: ['./current-organization-details.component.scss']
})
export class CurrentOrganizationDetailsComponent implements OnInit {

  employeeForm: FormGroup;

  constructor(private $: Services) { }

  ngOnInit(): void {
    this.employeeForm = this.$.apis.employee.employeeForm.controls['currentOrganizationDetails'] as FormGroup;
  }
}
