'use strict';

var router = function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise('/');
  //
  // Now set up the states
  $stateProvider
    .state('root', {
      url: '/',
      templateUrl: '../views/root.html'
    })
    .state('illustrations', {
      url: '/illustrations',
      controller: 'IllustrationsController',
      templateUrl: '../views/illustrations.html'
    })
    .state('projects', {
      url: '/projects/:id',
      controller: 'ProjectsController',
      templateUrl: '../views/projects.html'
    });
};

module.exports = router;
