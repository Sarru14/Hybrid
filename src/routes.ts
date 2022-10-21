angular.module("weatherApp")
  .config(function ($routeProvider: any,$locationProvider: any) {
    $routeProvider
      .when("/", {
        template: '<home city="city"></home>',
      })

      .when("/forecast", {
        template: "<forecast></forecast>",
      })
      .when("/verifica", {
        template: "<app-verifica></app-verifica>",
      });
      $locationProvider.hashPrefix('');
});
