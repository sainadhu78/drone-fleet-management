import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DroneOverviewComponent } from './drone-overview/drone-overview.component';
import { MaintenanceLogsComponent } from './maintenance-logs/maintenance-logs.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'drone',
    component: DroneOverviewComponent,
    canActivate: [authGuard],
  },
  {
    path: 'drone/:id',
    component: MaintenanceLogsComponent,
    canActivate: [authGuard],
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
