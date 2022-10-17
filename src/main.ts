import 'angular';
import 'angular-route';
// // import 'angular-resource';
// // import 'angular-animate';
// // import 'ng-infinite-scroll';
// // import 'angular-spinner';
// // import 'angular-auto-validate/dist/jcs-auto-validate';
// // import 'angular-ladda';
// // import 'angular-strap';
// // import 'angularjs-toaster';
// // import 'angular-ui-router';

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

import { RouterModule, Routes } from '@angular/router';

// import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// if (environment.production) {
//   enableProdMode();
// }

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
    RouterModule,
  ]
})

export class AppModule{
  ngDoBootstrap(){
  }
}

// export class AppModule {}


platformBrowserDynamic().bootstrapModule(AppModule).then(PlatformRef =>{
  console.log("Bootstrapping in Hybrid mode with Angular & AngularJS");
  const upgrade = PlatformRef.injector.get(UpgradeModule) as UpgradeModule;
  upgrade.bootstrap(document.body,['weatherApp']);
});
