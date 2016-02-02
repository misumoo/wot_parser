var wotParserApp = angular.module('wotParserApp', ['ngCookies', 'appControllers', 'ngRoute', 'ui.bootstrap', 'ngSanitize', 'ngAnimate']);

var appControllers = angular.module('appControllers', ['ngCookies']);

wotParserApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/home', {
      templateUrl: 'views/home.html',
      controller:  'HomeController'
    }).
    otherwise({
      redirectTo: '/home'
    });
}]);

wotParserApp.controller('HeaderController', ['$scope', '$cookies', '$http', '$location',
  function ($scope, $cookies, $http, $location) {

    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    };

}]);