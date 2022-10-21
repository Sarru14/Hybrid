
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoBootstrap, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { VerificaComponent } from './verifica/verifica.component';

@NgModule({
  declarations: [
    AppComponent,
    VerificaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VerificaComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
