import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Services } from 'src/app/Services/services.service';

@Component({
  selector: 'app-professional-details',
  templateUrl: './professional-details.component.html',
  styleUrls: ['./professional-details.component.scss']
})
export class ProfessionalDetailsComponent implements OnInit {

  employeeForm: FormGroup;
  file: string = '';
  skills: Array<string> = ['Angular', 'DotNet', 'React', 'Node', 'Vue'];

  constructor(private $: Services) { }

  ngOnInit(): void {
    this.employeeForm = this.$.apis.employee.employeeForm.controls['professionalDetails'] as FormGroup;
  }

  onSelectFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.file = event.target?.result as any;
        this.employeeForm.get('resume')?.setValue(this.file);
      };
    }
  }

}
