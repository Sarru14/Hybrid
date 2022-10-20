import 'angular';
import 'angular-route';
import './app';
import './services/index';
import './directives/index';
import './routes';
import './polyfills';

import { DoBootstrap, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { RouterModule } from '@angular/router';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// import { AppModule } from './app/app.module';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
  ]
})

export class AppModule implements DoBootstrap {
  constructor(private upgrade: UpgradeModule) {}
  ngDoBootstrap() {
      this.upgrade.bootstrap(document.documentElement, ['weatherApp'])
  }
}

// export class AppModule{
//   ngDoBootstrap(){
//   }
// }

// platformBrowserDynamic().bootstrapModule(AppModule).then(PlatformRef =>{
//   console.log("Bootstrapping in Hybrid mode with Angular & AngularJS");
//   const upgrade = PlatformRef.injector.get(UpgradeModule) as UpgradeModule;
//   upgrade.bootstrap(document.body,['weatherApp']);
// }).catch(err => console.error(err));

