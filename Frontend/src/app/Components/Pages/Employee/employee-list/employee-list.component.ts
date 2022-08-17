import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { DomSanitizer } from '@angular/platform-browser';
import { Employee } from 'src/app/Models/employee.model';
import { Diallog } from 'src/app/Models/util-interfaces';
import { Services } from 'src/app/Services/services.service';
import { config } from 'src/app/Utils/config';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  loader: boolean = false;


  dataSource: MatTableDataSource<Employee> = new MatTableDataSource<Employee>([]);
  displayedColumns: string[] = ['image', 'name', 'department', 'designation', 'email', 'mobile', 'resume', 'action'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatTable) table: MatTable<Employee>;
  @ViewChild(MatSort) sort: MatSort;

  resume: any;

  constructor(private $: Services, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getAll();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  getAll() {
    this.loader = true;
    this.$.apis.employee.getAllEmployee().subscribe({
      next: (x) => {
        this.dataSource.data = x;
        this.loader = false;

      },
      error: (err: HttpErrorResponse) => {
        console.log(err.message);
        this.loader = false;

      },
      complete: () => {
        this.table.renderRows();
        this.loader = false;
      }
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteEmp(item: Employee) {
    let diallog: Diallog = {
      title: 'Confirm Action',
      message: 'Are you sure want to delete?'
    };
    this.$.model.openConfirm(diallog).subscribe(x => {
      if (x) {
        this.loader = true;
        this.$.apis.employee.deleteEmployee(item._id).subscribe(
          {
            next: x => {
              this.loader = false;

              let index = this.dataSource.data.indexOf(item);
              this.dataSource.data.splice(index, 1);
              this.dataSource.data = this.dataSource.data.filter(i => i !== item);
              this.table.renderRows();
              this.$.snackBar.open("Deleted!", "", config);
            },
            error: (err: HttpErrorResponse) => {
              console.log(err.message);
              this.loader = false;
            },
            complete: () => {
              this.table.renderRows();
              this.loader = false;
            }
          }
        );
      }
    });
  }
  downloadResume(data: any) {
    const blob = new Blob([data], { type: 'image/jpeg' });
    this.resume = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
  }
}
