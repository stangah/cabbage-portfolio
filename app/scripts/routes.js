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
      templateUrl: '../views/showcase.html'
    })
    .state('uxui', {
      url: '/uxui',
      controller: 'UXUIController',
      templateUrl: '../views/showcase.html'
    })
    .state('projects', {
      url: '/projects/:id',
      controller: 'ProjectsController',
      templateUrl: '../views/projects.html'
    })
    .state('resume', {
      url: '/resume',
      templateUrl: '../views/resume.html'
    });
};

module.exports = router;
