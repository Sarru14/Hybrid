angular.module("weatherApp")
  .config(function ($routeProvider: any,$locationProvider: any) {
    $routeProvider
      .when("/", {
        template: '<home city="city"></home>',
      })

      .when("/forecast", {
        template: "<forecast></forecast>",
      });
      $locationProvider.hashPrefix('');
});
