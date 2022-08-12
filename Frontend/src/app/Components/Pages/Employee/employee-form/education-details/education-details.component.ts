import { FormArray, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Services } from 'src/app/Services/services.service';

@Component({
  selector: 'app-education-details',
  templateUrl: './education-details.component.html',
  styleUrls: ['./education-details.component.scss']
})
export class EducationDetailsComponent implements OnInit {

  employeeForm: FormGroup;


  constructor(private $: Services, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.employeeForm = this.$.apis.employee.employeeForm;
  }

  get educationDetailsArray() {
    return this.employeeForm.controls['educationDetails'] as FormArray;
  }

  addEdu() {
    let newEdu = this.fb.group({
      educationName: ['', Validators.required],
      universityName: ['', Validators.required],
      result: ['', Validators.required],
      year: ['', Validators.required],
    });
    this.educationDetailsArray.push(newEdu);
  }

  removeEdu(group: number) {
    this.educationDetailsArray.removeAt(group);
  }
}
