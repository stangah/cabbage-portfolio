'use strict';

var dependencies = ['$scope'];

var IllustrationsController = function($scope) {
  $scope.projects = [
    {id: '01', image: 'icon-illustrations-01.png'},
    {id: '02', image: 'icon-illustrations-02.png'},
    {id: '03', image: 'icon-illustrations-03.png'},
    {id: '04', image: 'placeholder-26.png'},
    {id: '05', image: 'placeholder-26.png'},
    {id: '06', image: 'placeholder-26.png'}
  ];

  $scope.title = 'Illustrations';
  $scope.section = 'illustrations';
  $scope.buttonLink = '/#/uxui';
  $scope.buttonClass = 'uxui';
};

module.exports = dependencies.concat(IllustrationsController);
