
これから、Dashboardというモジュールを作成して、AngularのModuleとComponentの概念で新しい画面を作成します。

**前提条件** [公式サイトチュートリアル](https://angular.io/tutorial/)の第7章まで理解します。
**参照リンク** [公式サイトModuleの紹介](https://angular.io/guide/architecture-modules)をご参照ください。

モジュール（Module）はライブラリのコレクションで、共通モジュール、機能モジュールなどを統一管理できます。基本原則として、-Class-の中に、機能を実装しませんので、Componentや、HTMLに使用するモジュールなど宣言します。

declarations — components, directives, pipesなど NgModuleで定義したモジュールをこのコレクションに宣言します。プロジェクトごとに一回宣言しかできません。

exports — 宣言したコレクションをほかのNgModuleで定義したモジュールやコンポ―ネットテンプレート（HTML）に使用できるため、エクスポートします。

imports — ほかのモジュールからエクスポートしたモジュールやコンポ―ネットテンプレートを、該当モジュールに使用する場合、インポートして使用できます。

providers — 提供されたサービスがグローバルコレクションに注入（永続？）して、アプリケーションに任意アクセスできるになります。

bootstrap — メインアプリケーションが起動する時のビューを定義します。ルートモジュール(AppModule)のみ定義します。



### Step 1:  Componentを作成

#### ng command
```bash
ng generate component dashboard
```

### Step 2:  Moduleを作成
#### ng command
```bash
ng generate module dashboard
```

**注意事項** ComponentとModuleは名前が一致して、作成したComponentとModuleのソースを同じ名前のフォルダに格納します。

### Step 3:　app.module.tsのソースを修正 

その時、`app.module.ts`に下記のようなソースを自動生成します。
#### app.module.ts
```ts
import { DashboardComponent } from './dashboard/dashboard.component'

/* ...(略)... */
@NgModule({
  declarations: [    
    AppComponent,
    DashboardComponent,  
  ],
/* ...(略)... */
```

`DashboardModule`から呼び出すことを修正します。
#### app.module.ts
```ts
import { DashboardModule } from './dashboard/dashboard.module';

/* ...(略)... */
@NgModule({
  declarations: [    
    AppComponent,  
  ],
  imports: [
    DashboardModule,
  ],
/* ...(略)... */
```

### Step 4: Routingにパスを追加
**事前準備**　[公式サイトのチュートリアル 7.Routingの章](https://angular.io/tutorial/toh-pt5)をご参照ください。
app-routing.module.ts の既存ソースの上に、下記内容を対応します。

#### app-routing.module.ts
```ts
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
   {path: 'dashboard', component : DashboardComponent },
];
```

### Step 5: Moduleとhtmlに使用するMaterialコントロールを追加

`dashboard.module.ts`に、使用するMaterialコントロールの定義をソースに追加します。
`DashboardComponent`の定義も追加して、htmlにMaterialのタグを使用できます。

#### dashboard.module.ts
```ts
import { MatButtonModule, MatCardModule, MatIconModule, } from '@angular/material';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule, MatCardModule, MatIconModule,
  ],
  exports: [
    MatButtonModule, MatCardModule, MatIconModule,
  ],
  declarations: [
    DashboardComponent,
  ]
})
```

#### dashboard.component.html

```html
  <mat-card class="dashboard-card">
    <mat-card-subtitle>
        データ連携
    </mat-card-subtitle>
    <mat-card-title>
        DataSpider Servistaの新機能
    </mat-card-title>
    <mat-card-content>
        業務自動化を阻む多く残る紙データでの業務処理。....  
    </mat-card-content>
    <mat-card-actions>
      <button mat-button>いいね！</button>
      <button mat-button>コメントする</button>
      <button mat-button>シェアする</button>
    </mat-card-actions>
  </mat-card>
```

