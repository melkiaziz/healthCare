import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';  // Doctor Dashboard
import { MachineComponent } from './machine/machine.component';
import { PatientComponent } from './patient/patient.component';   // Machine Component
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent, canActivate: [AuthGuard], data: { role: 'administrator' } },
  { path: 'user-dashboard', component: UserDashboardComponent, canActivate: [AuthGuard], data: { role: 'doctor' } },  // Doctor Dashboard
  { path: 'machine', component: MachineComponent, canActivate: [AuthGuard], data: { role: 'doctor' } },
   { path: 'patient', component: PatientComponent, canActivate: [AuthGuard], data: { role: 'doctor' } }, 

  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
