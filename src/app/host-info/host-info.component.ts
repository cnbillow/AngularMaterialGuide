/**
 * ref：https://dev.classmethod.jp/references/html5-drag-drop-api-review-dom/
 * */

import { Component, OnInit } from '@angular/core';

import { Host } from '../core/host';
import { HostInfoService } from './host-info.service';
import { ProviderAst } from '@angular/compiler';

@Component({
  selector: 'app-host-info',
  templateUrl: './host-info.component.html',  
  styleUrls: ['./host-info.component.css'],
  providers: [ HostInfoService ], //  Angular 内部のコンテナからの注入
})
export class HostInfoComponent implements OnInit {

  hosts : Host[];
 
  private srcElement : any = null;

  constructor(private hostInfoService: HostInfoService) { }

  ngOnInit() {
    this.hosts = this.hostInfoService.getHosts();   
  }
  onDragStart(event : DragEvent) : void {
    //console.log("activeTabIndex = %d", this.activeTabIndex);
    //console.log(event.target);
    this.srcElement = event.srcElement;
    event.dataTransfer.setData("innerHTML", event.srcElement.outerHTML);
  }

  onDrop(event : DragEvent)  : void  {
    // イベントの伝播を停止させる「stopPropagation()」を実行します。
    event.stopPropagation();
    // innerHTML 交換
    this.srcElement.outerHTML = event.srcElement.outerHTML;
    event.srcElement.outerHTML =  event.dataTransfer.getData("innerHTML");
  }
 

  onDragOver(event : DragEvent) {
    //「 dragover 」イベントのデフォルト処理をキャンセルしないと「 drop 」イベントが送出されない為に必須のものとなっています。
    event.preventDefault();
    //event.dataTransfer.dropEffect = "move";
  }
}
