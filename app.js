function getLastWord(input){
  tokens = input.replace(/\n/g,' ')
    .replace(/[^A-Za-z ]/g,'')
    .split(/\s+/)
    .filter(function(el){ return el.length != 0 });

  return tokens[tokens.length-1];
}

var site = angular.module('root',[])
  .controller('index', ['$scope', function($scope){
    var tokens;
    $scope.change = function() {
      $scope.hello = getLastWord($scope.main);
    };
  }]);
