import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule, MatIconModule, } from '@angular/material';
import { DndModule } from 'ng2-dnd';

import { DashboardComponent } from './dashboard.component';
@NgModule({
  imports: [
    CommonModule,
    MatButtonModule, MatCardModule, MatIconModule,
    DndModule.forRoot(),
  ],
  exports: [
    MatButtonModule, MatCardModule, MatIconModule,
    DndModule,
  ],
  declarations: [
    DashboardComponent,
  ]
})
export class DashboardModule { }
