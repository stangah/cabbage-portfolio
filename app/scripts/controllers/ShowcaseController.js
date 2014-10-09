'use strict';

var dependencies = ['$scope', 'dataProvider'];

var ShowcaseController = function($scope, dataProvider) {
  var data = dataProvider.showcase;
  $scope.projects = data.projects;
  $scope.title = data.title;
  $scope.section = data.section;
  $scope.buttonLink = data.buttonLink;
  $scope.buttonClass = data.buttonClass;

  $scope.transition = function() {
    $scope.transitionOut = true;
  };
};

module.exports = dependencies.concat(ShowcaseController);
