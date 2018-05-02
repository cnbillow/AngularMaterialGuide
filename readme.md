Angular Material の構築ガイドライン.

よく利用サイト:
[Material Design components for Angular in Git Hub](https://github.com/angular/material2)
[Angular Material 公式サイト](https://material.angular.io)
[Angular Material 2 Demos](https://material2-demoapp.firebaseapp.com/)
[Material Design Icons](https://material.io/icons/)

### 環境配置＆インストール

Angular環境の配置を[Angular CLI公式サイト](https://cli.angular.io/)をご参照ください。

Angular Materialのインストールを[こっち](./material-started.md)をご参照ください。


### Angular構成内容

1.[ModuleとComponent](./app-module.md)

### Angular Materialの構成

1. Angular Material



**Note:** `@angular/animations` uses the WebAnimation API that isn't supported by all browsers yet.


### Step 3: Import the component modules


### Step 4: Include a theme

Including a theme is **required** to apply all of the core and theme styles to your application.



### Step 5: Gesture Support

Some components (`mat-slide-toggle`, `mat-slider`, `matTooltip`) rely on
[HammerJS](http://hammerjs.github.io/) for gestures. In order to get the full feature-set of these
components, HammerJS must be loaded into the application.

You can add HammerJS to your application via [npm](https://www.npmjs.com/package/hammerjs), a CDN
(such as the [Google CDN](https://developers.google.com/speed/libraries/#hammerjs)), or served
directly from your app.


### Step 6 (Optional): Add Material Icons




### Example Angular Material projects
- [material.angular.io](https://material.angular.io) -
We build our own documentation with Angular Material!
