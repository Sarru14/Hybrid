angular.module("weatherApp").directive("weatherReport", function () {
  return {
    restrict: "E",
    template:`<div class="panel panel-default">
              <div class="panel-heading">
              <h3 class="panel-title">{{ $wrCtrl.weatherDay.test1 }}</h3>
              </div>
              <div class="panel-body">
                  Daytime temperature: {{ $wrCtrl.weatherDay.test2 }}
              </div>
              </div>`,
    replace: true,
    scope: {
      weatherDay: "=",
    },
    controller: [
      "$scope",
      function weatherReportController($scope) {
        //@ts-ignore
        let vm = this;
        vm.weatherDay = $scope.weatherDay;
      },
    ],
    controllerAs: "$wrCtrl",
  };
});
