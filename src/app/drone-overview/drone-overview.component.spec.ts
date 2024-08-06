import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DroneOverviewComponent } from './drone-overview.component';

describe('DroneOverviewComponent', () => {
  let component: DroneOverviewComponent;
  let fixture: ComponentFixture<DroneOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DroneOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DroneOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
