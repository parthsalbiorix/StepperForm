import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentOrganizationDetailsComponent } from './current-organization-details.component';

describe('CurrentOrganizationDetailsComponent', () => {
  let component: CurrentOrganizationDetailsComponent;
  let fixture: ComponentFixture<CurrentOrganizationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentOrganizationDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentOrganizationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
