'use strict';

var ShowcaseController = function($scope) {
  $scope.illustrations = [
    'placeholder-26.png',
    'placeholder-26.png',
    'placeholder-26.png',
    'placeholder-26.png',
    'placeholder-26.png',
    'placeholder-26.png'
  ];

  $scope.title = "UX & UI";

  $scope.buttonLink = '/#/illustrations';
  $scope.buttonClass = 'illustrations';
};

module.exports = ShowcaseController;
