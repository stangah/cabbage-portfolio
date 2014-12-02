'use strict';

var dependencies = ['$stateProvider', '$urlRouterProvider'];

var router = function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise('/');
  //
  // Now set up the states
  $stateProvider
    .state('main', {
      abstract: true,
      url: '',
      template: '<ui-view/>',
      controller: 'MainController'
    })
    .state('main.root', {
      url: '/',
      templateUrl: '../views/root.html'
    })
    .state('main.illustrations', {
      url: '/illustrations',
      controller: 'ShowcaseController',
      templateUrl: '../views/showcase.html',
      resolve: {
        dataProvider: 'IllustrationsData'
      }
    })
    .state('main.illustrationsProjects', {
      url: '/illustrations/projects/:id',
      controller: 'ProjectsController',
      templateUrl: '../views/projects.html',
      resolve: {
        dataProvider: 'IllustrationsData'
      }
    })
    .state('main.uxui', {
      url: '/uxui',
      controller: 'ShowcaseController',
      templateUrl: '../views/showcase.html',
      resolve: {
        dataProvider: 'UXUIData'
      }
    })
    .state('main.uxuiProjects', {
      url: '/uxui/projects/:id',
      controller: 'ProjectsController',
      templateUrl: '../views/projects.html',
      resolve: {
        dataProvider: 'UXUIData'
      }
    })
    .state('main.resume', {
      url: '/resume',
      templateUrl: '../views/resume.html'
    })
    .state('main.about', {
      url: '/about',
      templateUrl: '../views/about.html'
    })
    .state('main.contact', {
      url: '/contact',
      controller: 'ContactController',
      templateUrl: '../views/contact.html'
    });
};

module.exports = dependencies.concat(router);
