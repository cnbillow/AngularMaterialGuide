import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

// import { AppSideMenuComponent } from './app-side-menu/app-side-menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  // @ViewChild(AppSideMenuComponent) 
  // appSideMenuComponent: AppSideMenuComponent;
 
  /**
   * Call like this in other component.
   * this.appComponent.sidenave.close();
   */
  @ViewChild('snav') sidenave : MatSidenav;

  ngOnInit() {
    //console.log(this.sidenav);
    //this.dataSource = new ExampleDataSource(this.exampleDatabase);
  }

  // onNavClick() {   
  //   this.appSideMenuComponent.sidenav.toggle();
  //   console.log(this.appSideMenuComponent.sidenav.opened);
  // }
}
