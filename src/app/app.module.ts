import '../main';
import { DoBootstrap, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { RouterModule } from '@angular/router';
import { environment } from '../environments/environment';
import { VerificaComponent } from './verifica/verifica.component';
import { downgradeComponent } from '@angular/upgrade/static';
import * as angular from 'angular';

if (environment.production) {
  enableProdMode();
}

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
  ],
  declarations: [VerificaComponent],
})
export class AppModule implements DoBootstrap {
  constructor(private upgrade: UpgradeModule) {}
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.documentElement, ['weatherApp']);
  }
}

angular
  .module('weatherApp')
  .directive(
    'appVerifica',
    downgradeComponent({
      component: VerificaComponent,
    }) as angular.IDirectiveFactory
  );

platformBrowserDynamic().bootstrapModule(AppModule);
