angular.module("weatherApp").directive("forecast", function () {
  return {
    restrict: "E",
    template: `<div>
                    <p>
                        <a href="#/">Back to Search</a>
                    </p>
                    Forecast for {{ $fcCtrl.city }}
                    <hr />
                    Days: <a href="#/forecast/2" ng-class="{ 'bg-primary': days === '2' }">2</a> | <a href="#/forecast/5"
                        ng-class="{ 'bg-primary': days === '5' }">5</a> | <a href="#/forecast/7"
                        ng-class="{ 'bg-primary': days === '7' }">7</a>
                    <hr />
                    <div ng-repeat="w in $fcCtrl.weatherResult">
                        <div class="row">
                            <div class="col-md-12">
                                <weather-report weather-day="w"></weather-report>
                            </div>
                        </div>
                    </div>
                </div>`,
    replace: true,
    scope: {},
    controllerAs: "$fcCtrl",
    controller: [
      "$routeParams",
      "cityService",
      function forecastController($routeParams, cityService) {
        //@ts-ignore
        let vm = this;
        vm.city = cityService.city;

        vm.days = $routeParams.days || "2";

        vm.weatherResult = [
          {
            test1: "ciao2",
            test2: "test",
          },
          {
            test1: "ciao2",
            test2: "test",
          },
        ];
      },
    ],
  };
});
