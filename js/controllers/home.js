wotParserApp.controller('HomeController', [ '$scope', '$cookies', '$http', '$filter', '$sce', '$location', '$timeout',
  function($scope, $cookies, $http, $filter, $sce, $location, $timeout) {

    $scope.setup = function() {
      console.log("Ping!");
    }

}]);