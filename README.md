## Hybrid

- Creare un progetto Angular 14 con `ng new`
- Copiare all'interno i componenti di AngularJS, preforibilmente nella folder src
- modificare l'index.html appena importato in modo che non includa la vecchia app tramite la direttiva `ng-app`, quindi commentare l'eventuale riga `<html lang="en-us" ng-app="weatherApp">`
- Correggere eventuali path nell'angular.json
- Nel routes.ts aggiungere il parametro `$locationProvider:any` alla funzione di config e richiamare `$locationProvider.hashPrefix('');` dopo aver definito l'ultima route.
- Nel main.ts aggiungere le linee
  ```Typescript
  //import { AppModule } from './app/app.module';

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

  platformBrowserDynamic().bootstrapModule(AppModule).then(PlatformRef =>{
    console.log("Bootstrapping in Hybrid mode with Angular & AngularJS");
    const upgrade = PlatformRef.injector.get(UpgradeModule) as UpgradeModule;
    upgrade.bootstrap(document.body,['weatherApp']);
  }).catch(err => console.error(err));
  ```
  queste linee faranno girare l'app come AngularJS, per tornare a fare girare l'app in Angular 14 sarà necessario sostituire il codice sopra con quanto segue:
  ```Typescript
  import { AppModule } from './app/app.module';

  // @NgModule({
  //   imports: [
  //     BrowserModule,
  //     UpgradeModule,
  //     RouterModule,
  //   ]
  // })

  // export class AppModule{
  //   ngDoBootstrap(){
  //   }
  // }

  platformBrowserDynamic().bootstrapModule(AppModule).then(PlatformRef =>{
    console.log("Bootstrapping in Hybrid mode with Angular & AngularJS");
    const upgrade = PlatformRef.injector.get(UpgradeModule) as UpgradeModule;
    upgrade.bootstrap(document.body,['weatherApp']);
  }).catch(err => console.error(err));
  ```
