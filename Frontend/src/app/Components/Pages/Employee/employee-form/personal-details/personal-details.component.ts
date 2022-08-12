import { Services } from 'src/app/Services/services.service';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent implements OnInit {

  imgUrl: string = '';
  employeeForm: FormGroup;
  copyAddress: boolean = false;

  constructor(private $: Services) { }

  ngOnInit(): void {
    this.employeeForm = this.$.apis.employee.employeeForm.controls['personalDetails'] as FormGroup;
    this.imgUrl = this.employeeForm.get('image')?.value;
  }

  onSelectFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.imgUrl = event.target?.result as any;
        this.employeeForm.get('image')?.setValue(this.imgUrl);
      };
    }
  }

  copyAdd() {
    this.copyAddress = !this.copyAddress;
    if (this.copyAddress) {
      let presentAddress = this.employeeForm.get('presentAddress')?.value;
      this.employeeForm.get('permanentAddress')?.setValue(presentAddress);
    }
  }
} 
