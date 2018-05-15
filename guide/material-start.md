**注意事項** npm コマンドのみ説明します。

### Step 1:  Angular Material & Angular CDK のインストール

プロジェクトを新規作成した後、プロジェクトフォルダに、Angular Material & Angular CDKをnpmコマンドでインストールします。

#### NPM
```bash
npm install --save @angular/material @angular/cdk
```
**V5.2.5版について** 2018/5/1の時点で、`@angular/material@6`をリリースして、Issueにほかのパッケージを更新していないため、ビルド通れない状況を発生しますので、安定版のV5.2.5をインストールしてください。
```bash
npm install --save @angular/material@5.2.5 @angular/cdk
```

**V6.0.0版について**
後程

**V5⇒V6の手順**
後程


#### あるいは: スナップショット版をインストール

GitHubのmasterブランチに最新ビルドしたスナップショット版をインストールします。

#### NPM
```bash
npm install --save angular/material2-builds angular/cdk-builds
```


### Step 2: アニメーションをインストール

一部マテリアル部品がAngularアニメーションモジュールで動作しますが、もしアニメーションで動作できる場合、`@angular/animations`をインストールして、`BrowserAnimationsModule`をapp.module.tsにインポートしてください。

#### NPM
```bash
npm install --save @angular/animations
```

**Note:** ブラウザ依存

##### app.module.ts
```ts
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  ...
  imports: [BrowserAnimationsModule],
  ...
})
export class PizzaPartyAppModule { }
```

もしほかの依存関係をプロジェクトに追加したくない場合、 `NoopAnimationsModule`を使ってください。

##### app.module.ts
```ts
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  ...
  imports: [NoopAnimationsModule],
  ...
})
export class PizzaPartyAppModule { }
```

### Step 3: 部品をインポート

使用する NgModule 部品ををapp.module.tsにインポートします。

```ts
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

@NgModule({
  ...
  imports: [MatButtonModule, MatCheckboxModule],
  ...
})
export class PizzaPartyAppModule { }
```

