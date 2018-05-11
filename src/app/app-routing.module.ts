import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes  } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HostInfoComponent } from './host-info/host-info.component';
import { SendInfoComponent } from './send-info/send-info.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component : HomeComponent },
  {path: 'dashboard', component : DashboardComponent },
  {path: 'hostinfo', component : HostInfoComponent},
  {path: 'sendinfo', component : SendInfoComponent}
];

@NgModule({
  imports: [
    CommonModule,   
    RouterModule.forRoot(routes)  
  ],
  exports: [ RouterModule ],
  declarations: []
})


export class AppRoutingModule { }
