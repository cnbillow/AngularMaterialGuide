import { Injectable } from '@angular/core';

import { Product } from '../core/product';

@Injectable()
export class HomeService {

  constructor() { }

  //TODO: 後でRxJSになる
  getProducts() : Product[] {
    
    let prods : Product[];
    prods = [];
    prods.push({id : 1 , name : "HULFT 8", summary : "TCP／IP企業内・企業間通信ミドルウェア"});
    prods.push({id : 2 , name : "HULFT-WebConnect", summary : "インターネット経由のファイル連携がHULFTのファイル転送で簡単かつセキュアに実現！"});
    prods.push({id : 3 , name : "HULFT IoT", summary : "ミッションクリティカル領域で安心して利用できるIoTシステムを実現"});
    prods.push({id : 4 , name : "DataSpider", summary : "異なるシステムのデータやアプリケーションをノンプログラミングで「つなぐ」"});
    prods.push({id : 5 , name : "DataMagic", summary : "データ加工やデータ変換プロセスに欠かせない様々な機能を標準で装備して、Windows版なら業界屈指の低価格で導入可能です。"});
    prods.push({id : 6 , name : "HULFT-HUB", summary : "HULFT運用管理のさらなる最適化・自動化を実現。"});
    prods.push({id : 7 , name : "HULFT Script", summary : "ァイル転送前後に発生する処理をGUIで簡単作成。"});
    prods.push({id : 8 , name : "HULFT-WebFileTransfer", summary : "セキュアWebデータ連携ミドルウェア"});

    let index = 0;
    prods.forEach(p => p.sortid = index++);

    return prods;
  }

}
