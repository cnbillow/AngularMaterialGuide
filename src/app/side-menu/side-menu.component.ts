import { Component, OnInit, ViewChild } from '@angular/core';

import { MatSidenav } from '@angular/material/sidenav';

import { AppComponent }  from '../app.component';

export class AppMenu {
  id : number;
  name : string;
  link? : string;
}

@Component({
  selector: 'app-side-menu',
  template: `
    <div class="sidenav">
      <button mat-icon-button class="sidenav-back-button">    
        <mat-icon aria-label="Show Menu" (click)="onMenuClick()">arrow_back</mat-icon>     
      </button>

      <button *ngFor="let menu of sideMenus" mat-button routerLink="{{menu.link}}" (click)="onMenuClick()" class="sidenav sidenav-nav-button">
        {{menu.name}}
      </button>
    </div>
        `,
  styleUrls: ['./side-menu.component.css']
})


export class SideMenuComponent implements OnInit {

  sideMenus : AppMenu[];

  
  appComponent : AppComponent

  constructor(appComponent : AppComponent ) {
    this.appComponent = appComponent;
   }

  ngOnInit() {
    this.sideMenus = [
      {id: 1 , name : "Home", link : '/home'},
      {id: 2 , name : "Dashboard", link : '/dashboard'},
      {id: 3 , name : "Host Information", link : '/hostinfo'},
      {id: 4 , name : "Send Information", link : '/sendinfo'},
      {id: 5 , name : "Receive Information", link : '/sendinfo'},
      {id: 6 , name : "Format Information", link : '/sendinfo'},
    ]
  }

  onMenuClick() {
    this.appComponent.sidenave.close();
  }
}
