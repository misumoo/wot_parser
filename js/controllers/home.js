wotParserApp.controller('HomeController', [ '$scope', '$cookies', '$http', '$filter', '$sce', '$location', '$timeout',
  function($scope, $cookies, $http, $filter, $sce, $location, $timeout) {

    var serviceBase = "https://api.worldoftanks.com/wot/account/list/?application_id=fc64cc7ba1982d2f404511b694c0f9c6&search=misumoo";

    $scope.setup = function() {
      $scope.username = "misumoo";
      $scope.getInfo();
    };

    $scope.getInfo = function() {
      $http.get(serviceBase).success(function(response) {
          $scope.account_id = (response.data[0].account_id);
      }).error(function() {
        alert("Error getting info.");
      });
    }

}]);