import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeFormComponent } from './Components/Pages/Employee/employee-form/employee-form.component';
import { EmployeeListComponent } from './Components/Pages/Employee/employee-list/employee-list.component';

const routes: Routes = [
  { path: '', component: EmployeeListComponent },
  { path: 'employee/form', component: EmployeeFormComponent },
  { path: 'employee/form/:id', component: EmployeeFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
