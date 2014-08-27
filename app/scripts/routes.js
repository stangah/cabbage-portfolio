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
    .state('illustrationsProjects', {
      url: '/illustrations/projects/:id',
      controller: 'ProjectsController',
      templateUrl: '../views/projects.html',
      resolve: {
        projectsProvider: 'IllustrationsProjects'
      }
    })
    .state('uxui', {
      url: '/uxui',
      controller: 'UXUIController',
      templateUrl: '../views/showcase.html'
    })
    .state('uxuiProjects', {
      url: '/uxui/projects/:id',
      controller: 'ProjectsController',
      templateUrl: '../views/projects.html',
      resolve: {
        projectsProvider: 'UXUIProjects'
      }
    })
    .state('resume', {
      url: '/resume',
      templateUrl: '../views/resume.html'
    });
};

module.exports = router;
