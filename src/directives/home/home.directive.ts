angular.module("weatherApp").directive("home", function () {
  return {
    restrict: "E",
    template: `<div class="row">
                <div class="col-md-6 col-md-offset-3">
                    <h4>Forecast by City</h4>
                    <div class="form-group">
                        <input type="text" ng-model="$ctrl.city" class="form-control" />
                    </div>
                    <a href="#/forecast" class="btn btn-primary">Get Forecast</a>
                    <a href="#/verifica" class="btn btn-primary">Get Angular 14</a>
                </div>
              </div>`,
    replace: true,
    scope: {},
    controller: [
      "$scope",
      "cityService",
      function homeController($scope, cityService) {
        // @ts-ignore
        let vm = this;
        vm.city = cityService.city;

        $scope.$watch("$ctrl.city", function () {
          cityService.city = vm.city;
        });
      },
    ],
    controllerAs: "$ctrl",
  };
});
