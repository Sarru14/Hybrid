
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoBootstrap, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';

// @NgModule({
//   declarations: [
//     AppComponent,
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

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
