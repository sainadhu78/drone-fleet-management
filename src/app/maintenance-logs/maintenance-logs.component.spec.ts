import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceLogsComponent } from './maintenance-logs.component';

describe('MaintenanceLogsComponent', () => {
  let component: MaintenanceLogsComponent;
  let fixture: ComponentFixture<MaintenanceLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaintenanceLogsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenanceLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
