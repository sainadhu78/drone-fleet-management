import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drone-detail-dialog',
  templateUrl: './drone-detail-dialog.component.html',
  styleUrls: ['./drone-detail-dialog.component.scss'],
})
export class DroneDetailDialogComponent {
  drone: any; // drone data

  constructor(
    public dialogRef: MatDialogRef<DroneDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    private router: Router
  ) {
    this.drone = data.drone;
  }
  viewMaintenanceLogs(drone: any): void {
    this.dialog.closeAll();
    this.router.navigate(['/drone', this.drone.id]);
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
