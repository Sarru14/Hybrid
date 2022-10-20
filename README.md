## Hybrid
#### Lo scopo di questo progetto era fare un progetto che permettesse di lanciare entrambe le versioni di Angualr.

***
>Progetto AngularJS [originario](https://github.com/flimina/angularJS) creato da Fabiano Limina
- Creare un progetto Angular 14 con `ng new`
- Copiare all'interno i componenti di AngularJS, preforibilmente nella folder src
  - eventualmente ricordarsi di aggiungere le dependencies (del progetto in AngularJS) che mancano al progetto nuovo: basta fare un copia/incolla dentro il `package.json`.
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
***
In questa maniera si ottiene un progetto basato su Angular 14 che ha la possibilità di far funzonare codice relativo a componenti Angular 14 __OPPURE__ codice AngularJS in retrocompatibilità.

Per lo step successivo, ossia ottenere un progetto che pubblichi una pagina che funziona con componenti Angular e AngularJS è __NECESSARIO__ trasformare tutti i file di AngularJS (direttive, controller e servizi) in __componenti__ ossia l'unico formato che è in grado di utilizzare Angular 14.

La parte fondamentale di questo discorso rimane però la stessa, __TUTTA__ l'applicazione __DEVE__ essere allineata sulla stessa tecnologia.
