import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DroneDetailDialogComponent } from './drone-detail-dialog.component';

describe('DroneDetailDialogComponent', () => {
  let component: DroneDetailDialogComponent;
  let fixture: ComponentFixture<DroneDetailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DroneDetailDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DroneDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
