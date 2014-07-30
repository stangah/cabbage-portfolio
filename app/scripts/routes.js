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
    });
};

module.exports = router;
