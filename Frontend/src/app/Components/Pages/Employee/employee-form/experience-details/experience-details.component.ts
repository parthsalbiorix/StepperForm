import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Services } from 'src/app/Services/services.service';

@Component({
  selector: 'app-experience-details',
  templateUrl: './experience-details.component.html',
  styleUrls: ['./experience-details.component.scss']
})
export class ExperienceDetailsComponent implements OnInit {

  employeeForm: FormGroup;


  constructor(private $: Services, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.employeeForm = this.$.apis.employee.employeeForm;
  }
  get experienceDetailsArray() {

    return this.employeeForm.controls['experienceDetails'] as FormArray;
  }

  addExp() {
    let newExp = this.fb.group({
      companayName: ['', Validators.required],
      position: ['', Validators.required],
      totalYear: ['', Validators.required],
      CTC: ['', Validators.required],
    });
    this.experienceDetailsArray.push(newExp);
  }


  removeExp(group: number) {
    this.experienceDetailsArray.removeAt(group);
  }
}
