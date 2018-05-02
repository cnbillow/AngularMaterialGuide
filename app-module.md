
これから、Dashboardというモジュールを作成して、AngularのModuleとComponentの概念で新しい画面を作成します。

**前提条件** [公式サイトチュートリアル](https://angular.io/tutorial/)の第7章まで理解します。

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
