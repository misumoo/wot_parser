wotParserApp.controller('HomeController', [ '$scope', '$cookies', '$http', '$filter', '$sce', '$location', '$timeout',
  function($scope, $cookies, $http, $filter, $sce, $location, $timeout) {

    $scope.setup = function() {
      $scope.username = "misumoo";
      $scope.getInfo();
    }; //setup

    $scope.getInfo = function() {
      var serviceBase = "https://api.worldoftanks.com/wot/account/list/?application_id=fc64cc7ba1982d2f404511b694c0f9c6&search=misumoo";
      $http.get(serviceBase).success(function(response) {
        $scope.account_id = response.data[0].account_id;
        $scope.getUserTanks();
      }).error(function() {
        alert("Error getting info.");
      });
    };  //getInfo

    $scope.getUserTanks = function() {
      var i = 0;
      var serviceBase = "https://api.worldoftanks.com/wot/account/tanks/?application_id=demo&account_id=" + $scope.account_id;
      $http.get(serviceBase).success(function(response) {
        $scope.tanks = response.data[$scope.account_id];
        response.data[$scope.account_id].forEach(function(entry) {
          winrate = parseFloat(parseInt(response.data[$scope.account_id][i].statistics.wins) / parseInt(response.data[$scope.account_id][i].statistics.battles) * 100).toFixed(2);
          $scope.tanks[i].winrate = winrate;
          $scope.tanks[i].image = tanksEncyclopedia[entry.tank_id].image;
          console.log(entry);
          i++
        });
      }).error(function() {
        alert("Error getting info.");
      });
    }; //getTanks

    $scope.getAllTanks = function() {
      var serviceBase = "https://api.worldoftanks.com/wot/encyclopedia/tanks/";
      $http.get(serviceBase).success(function(response) {
        $scope.tanks = response.data[$scope.account_id];
      }).error(function() {
        alert("Error getting info.");
      });
    }; //getAllTanks

}]);

wotParserApp.directive('backImg', function() {
  return function(scope, element, attrs) {
    attrs.$observe('backImg', function(value) {
      element.css({
        'background-image' : 'url(' + value + ')'
      })
    });
  };
});