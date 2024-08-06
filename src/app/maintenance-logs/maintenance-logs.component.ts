import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ColDef } from 'ag-grid-community';
import { DataService } from '../data.service';

@Component({
  selector: 'app-maintenance-logs',
  templateUrl: './maintenance-logs.component.html',
  styleUrls: ['./maintenance-logs.component.scss'],
})
export class MaintenanceLogsComponent implements OnInit {
  droneid: string | null = '';
  rowData: any[] = [];
  colDefs: ColDef[] = [
    { headerName: 'Date', field: 'date' },
    { headerName: 'Description', field: 'description' },
    { headerName: 'Technician', field: 'technician' },
  ];
  defaultColDef: ColDef = {
    flex: 1,
    filter: true,
  };
  themeClass = 'ag-theme-alpine';

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.droneid = this.route.snapshot.paramMap.get('id');

    if (this.droneid) {
      this.dataService.getDrones().subscribe({
        next: (data: any[]) => {
          // Ensure data is an array
          if (Array.isArray(data)) {
            // Find the drone by ID
            const drone = data.find((d: any) => d.id === this.droneid);

            if (drone) {
              // Set rowData to maintenance logs of the selected drone
              this.rowData = drone.maintenance_logs;
            } else {
              console.error('Drone not found');
              this.rowData = []; // Clear the row data if drone is not found
            }
          } else {
            console.error('Data is not an array');
          }
        },
        error: (err) => {
          console.error('Error fetching drone data', err);
        },
      });
    }
  }
}
