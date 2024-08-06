import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { DroneDetailDialogComponent } from '../drone-detail-dialog/drone-detail-dialog.component';
import { DataService } from '../data.service'; // Import your data service
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-drone-overview',
  templateUrl: './drone-overview.component.html',
  styleUrls: ['./drone-overview.component.scss'],
})
export class DroneOverviewComponent implements OnInit {
  drones: any[] = [];
  userEmail: string = '';
  searchControl = new FormControl('');
  filteredDrones!: Observable<any[]>;

  constructor(
    private dialog: MatDialog,
    private dataService: DataService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loadUserEmail();
    this.loadData();
  }

  loadUserEmail(): void {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    this.userEmail = user.username || 'Guest';
  }

  loadData(): void {
    this.dataService.getDrones().subscribe((data) => {
      this.drones = data;
      console.log(this.drones);
      this.setupFilter(); // Ensure filtering is set up after data is loaded
    });
  }

  setupFilter(): void {
    this.filteredDrones = this.searchControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filterDrones(value ?? '')) // Default to empty string if value is null
    );
  }

  private _filterDrones(value: string): any[] {
    const filterValue = value.toLowerCase();
    return this.drones.filter((drone) =>
      drone.id.toLowerCase().includes(filterValue)
    );
  }

  openDialog(drone: any) {
    const dialogRef = this.dialog.open(DroneDetailDialogComponent, {
      data: { drone },
      width: '600px',
      disableClose: true,
      autoFocus: true,
      panelClass: 'custom-dialog-container',
    });
  }
  logout() {
    this.authService.logout();
  }
}
