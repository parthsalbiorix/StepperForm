import { MaterialModule } from './Modules/Material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfirmpopupComponent } from './Utils/Components/confirmpopup/confirmpopup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './Components/Templates/Shared/header/header.component';
import { EmployeeListComponent } from './Components/Pages/Employee/employee-list/employee-list.component';
import { EmployeeFormComponent } from './Components/Pages/Employee/employee-form/employee-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonalDetailsComponent } from './Components/Pages/Employee/employee-form/personal-details/personal-details.component';
import { BankDetailsComponent } from './Components/Pages/Employee/employee-form/bank-details/bank-details.component';
import { ProfessionalDetailsComponent } from './Components/Pages/Employee/employee-form/professional-details/professional-details.component';
import { EducationDetailsComponent } from './Components/Pages/Employee/employee-form/education-details/education-details.component';
import { ExperienceDetailsComponent } from './Components/Pages/Employee/employee-form/experience-details/experience-details.component';
import { CurrentOrganizationDetailsComponent } from './Components/Pages/Employee/employee-form/current-organization-details/current-organization-details.component';


@NgModule({
  declarations: [
    AppComponent,
    ConfirmpopupComponent,
    HeaderComponent,
    EmployeeListComponent,
    EmployeeFormComponent,
    PersonalDetailsComponent,
    BankDetailsComponent,
    ProfessionalDetailsComponent,
    EducationDetailsComponent,
    ExperienceDetailsComponent,
    CurrentOrganizationDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
