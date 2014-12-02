'use strict';

var dependencies = ['$scope', '$http'];

var ContactController = function($scope, $http) {

  $scope.sendMsg = function() {
    var payload = {
      name: $scope.name,
      email: $scope.email,
      msg: $scope.msg,
    };

    $http.post('/contact', payload)
      .success(function(data, status) {
        console.log(status, data);
      })
      .error(function(data, status) {
        console.log(status, data);
      });

    $scope.name = '';
    $scope.email = '';
    $scope.msg = '';

    $scope.form.$setPristine();

  };
};

module.exports = dependencies.concat(ContactController);
