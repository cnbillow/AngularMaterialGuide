import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { DndModule } from 'ng2-dnd';

import {CdkTableModule} from '@angular/cdk/table';
//import {CdkTreeModule} from '@angular/cdk/tree';
import {
  // MatAutocompleteModule,        
  MatButtonModule,
  // MatButtonTogglMeodule,
  // MatCardModule,
  // MatCheckboxModule,
  // MatChipsModule,
  // MatDatepickerModule,
  // MatDialogModule,
  // MatDividerModule,
  // MatExpansionModule,
  // MatFormFieldModule,
  // MatGridListModule,
  MatIconModule,
  // MatInputModule,
  // MatListModule,
  // MatMenuModule,
  // MatPaginatorModule,
  // MatProgressBarModule,
  // MatProgressSpinnerModule,
  // MatRadioModule,
  // MatRippleModule,
  // MatSelectModule,
  MatSidenavModule,
  // MatSlideToggleModule,
  // MatSliderModule,
  // MatSnackBarModule,
  // MatSortModule,
  // MatStepperModule,
  //MatTableModule,
  //MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';
import { MatListModule } from '@angular/material/list';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
//import { AppHomeComponent } from './app-home/app-home.component';
import { DashboardModule } from './dashboard/dashboard.module';
//import { DashboardComponent } from './dashboard/dashboard.component'

import { SideMenuComponent } from './side-menu/side-menu.component';
//import { SideMenuModule } from './side-menu/side-menu.module';
//import { HostInfoComponent } from './host-info/host-info.component';
// import { DragAndDropModule } from './core/drag-and-drop/drag-and-drop.module';
import { HostInfoModule } from './host-info/host-info.module';
import { SendInfoModule } from './send-info/send-info.module';
import { GroupModule } from './group/group.module';

//import { SendInfoComponent } from './send-info/send-info.component';


@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CdkTableModule,    
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
   
    MatToolbarModule,
    MatTooltipModule,
    AppRoutingModule,
    MatListModule,
    HomeModule,
    DashboardModule,
    GroupModule,
    HostInfoModule,
    SendInfoModule,
    // DragAndDropModule,
  ],
  exports: [
    CdkTableModule,  
    

    MatButtonModule,
   
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTooltipModule,
    MatListModule,
    // GroupModule,
    // SendInfoModule,
    // DragAndDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
