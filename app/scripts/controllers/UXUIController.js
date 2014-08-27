'use strict';

var dependencies = ['$scope'];

var ShowcaseController = function($scope) {
  $scope.projects = [
    {id: '01', image: 'icon-uxui-01.gif'},
    {id: '02', image: 'placeholder-26.png'},
    {id: '03', image: 'placeholder-26.png'},
    {id: '04', image: 'placeholder-26.png'},
    {id: '05', image: 'placeholder-26.png'},
    {id: '06', image: 'placeholder-26.png'}
  ];

  $scope.title = 'UX & UI';
  $scope.section = 'uxui';
  $scope.buttonLink = '/#/illustrations';
  $scope.buttonClass = 'illustrations';
};

module.exports = dependencies.concat(ShowcaseController);
