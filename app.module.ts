import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MachineComponent } from './machine/machine.component';
import { PatientComponent } from './patient/patient.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    MachineComponent,
    PatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginComponent,
    NavigationComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
