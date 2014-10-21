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
      controller: 'ShowcaseController',
      templateUrl: '../views/showcase.html',
      resolve: {
        dataProvider: 'IllustrationsData'
      }
    })
    .state('illustrationsProjects', {
      url: '/illustrations/projects/:id',
      controller: 'ProjectsController',
      templateUrl: '../views/projects.html',
      resolve: {
        dataProvider: 'IllustrationsData'
      }
    })
    .state('uxui', {
      url: '/uxui',
      controller: 'ShowcaseController',
      templateUrl: '../views/showcase.html',
      resolve: {
        dataProvider: 'UXUIData'
      }
    })
    .state('uxuiProjects', {
      url: '/uxui/projects/:id',
      controller: 'ProjectsController',
      templateUrl: '../views/projects.html',
      resolve: {
        dataProvider: 'UXUIData'
      }
    })
    .state('resume', {
      url: '/resume',
      templateUrl: '../views/resume.html'
    })
    .state('about', {
      url: '/about',
      templateUrl: '../views/about.html'
    });
};

module.exports = router;
