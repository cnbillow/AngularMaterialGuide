import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  simpleDrop : any = null;

  cards : Card[] = [
    { id : 1, title: "データ連携", summay : "DataSpider", imgsrc : "https://www.hulft.com/application/files/4014/7886/1088/software-dataspider-index-fig-04.png"},
    { id : 2, title: "データ加工", summay : "DataMagic", imgsrc : "https://www.hulft.com/application/files/5514/7886/1087/software-dataspider-index-fig-02.png"},
    { id : 3, title: "データ変換", summay : "DataConverter", imgsrc : "https://www.hulft.com/application/files/6114/7886/1087/software-dataspider-index-fig-03.png"},
    { id : 4, title: "データ転送", summay : "DataTransfer", imgsrc : "https://www.hulft.com/application/files/3314/7886/1088/software-dataspider-index-fig-05.png"},
  ]

  dropcards : Card[] = [];

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
     this.cards.forEach(element => {
       element.resourceUrl = this.sanitizer.bypassSecurityTrustUrl(element.imgsrc);
       console.log(element.resourceUrl);
     });
  }


  getImageUrl(card : Card) : SafeUrl{
    
    return card.resourceUrl;
  }

  onDropCard(event : any) : void{
    console.log(event);
    let card : Card = event.dragData;
    console.log(card);
    this.dropcards.push(card);
    this.simpleDrop = null;
  }
}

class Card {
  resourceUrl? : SafeUrl;
  constructor(
    public id : number, 
    public title: string, 
    public summay : string, 
    public imgsrc : string) {}
}