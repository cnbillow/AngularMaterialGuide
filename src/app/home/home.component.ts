import { Component, Input, OnInit } from '@angular/core';

import { HomeService } from './home.service';
import { Product } from '../core/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
 // providers : [ HomeService ]
})
export class HomeComponent implements OnInit {

  //@Input() 
  activeTabIndex = 2;

  @Input() selectedIndex : number;

  products : Product[];

  constructor(private homeService : HomeService) { }

  ngOnInit() {
    this.products = this.homeService.getProducts();

    console.log("selectedIndex : %d ", this.selectedIndex);
  }

  onTabDrop(data) {

    let dragsort = this.products.findIndex(p => { 
         return p.id == data.dragData.id && p.name == data.dragData.name;
    });

    let dropsort = this.products.findIndex(p => {
      return p.id == data.dropData.id && p.name == data.dropData.name;
    });

    //console.log(`dragsort: ${dragsort},  dropsort: ${dropsort}`);

    if(dragsort > dropsort) {
      let guide = 0;
      this.products.forEach(p => {
        if(guide == dropsort) {
          this.products[dragsort].sortid = dropsort;
          ++this.products[dropsort].sortid;
        } else if (guide > dropsort && guide < dragsort) {
          ++this.products[guide].sortid;
        }

        guide++;
      });
    } else if (dragsort < dropsort) {
      let guide = 0;
      this.products.forEach(p => {
        if(guide == dragsort) {
          this.products[dragsort].sortid = dropsort;
          --this.products[dropsort].sortid;
        } if(guide > dragsort && guide < dropsort) {
          --this.products[guide].sortid;
        }
        guide++;
      });
    }
 
    this.products.sort( (prod1, prod2) => {
      if(prod1.sortid < prod2.sortid) return -1;
      else if (prod1.sortid > prod2.sortid) return 1;
      return 0;
    });
 
  }


  onTab2Drop(event) : void {
    console.log(event);
  }

/*
  onDragStart(event : DragEvent) : void {
    
    event.dataTransfer.setData("text", "TODO:TAB NAME");
  }

  onDrop(event : DragEvent)  : void  {
   // console.log("onDrop");
    event.stopPropagation();
    var data = event.dataTransfer.getData("text");
    console.log(data);
  }

  allowDrop(event : DragEvent) {
    event.preventDefault();
  }
*/
  
  
}
