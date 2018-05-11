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

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
//import { AppHomeComponent } from './app-home/app-home.component';
import { DashboardModule } from './dashboard/dashboard.module';
//import { DashboardComponent } from './dashboard/dashboard.component'

import { SideMenuComponent } from './side-menu/side-menu.component';
//import { SideMenuModule } from './side-menu/side-menu.module';
//import { HostInfoComponent } from './host-info/host-info.component';
import { HostInfoModule } from './host-info/host-info.module';
import { SendInfoModule } from './send-info/send-info.module';

//import { SendInfoComponent } from './send-info/send-info.component';



@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    //SendInfoComponent,
    //HostInfoComponent,
    //DashboardComponent,
   // AppHomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    //DndModule.forRoot(),

    CdkTableModule,    

    // MatAutocompleteModule,        
    MatButtonModule,
    // MatButtonToggleModule,
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


    AppRoutingModule,
    HomeModule,
    DashboardModule,
    HostInfoModule,
    SendInfoModule,

   
  ],
  exports: [
    CdkTableModule,  
    
    // MatAutocompleteModule,    
    MatButtonModule,
    // MatButtonToggleModule,
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
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
