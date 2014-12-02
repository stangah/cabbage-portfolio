'use strict';

var angular = require('angular');
var uiRouter = require('angular-ui-router');
var sanitize = require('angular-sanitize');

var IllustrationsDataService = require('./services/IllustrationsDataService');
var UXUIDataService = require('./services/UXUIDataService');
var Links = require('./services/URLService');

var ShowcaseController = require('./controllers/ShowcaseController');
var ProjectsController = require('./controllers/ProjectsController');
var ContactController = require('./controllers/ContactController');
var LinkFooterDirective = require('./directives/LinkFooterDirective');
var HeaderLogoDirective = require('./directives/HeaderLogoDirective');
var routes = require('./routes');

var app = angular.module('myApp', ['ui.router', 'ngSanitize']);


app.constant('IllustrationsData', IllustrationsDataService);
app.constant('UXUIData', UXUIDataService);
app.constant('Links', Links);

app.controller('ShowcaseController', ShowcaseController);
app.controller('ProjectsController', ProjectsController);
app.controller('ContactController', ContactController);

app.controller('MainController', ['$scope', 'Links', function($scope, links) {
  $scope.links = links;
}]);


app.directive('linkFooter', LinkFooterDirective);
app.directive('headerLogo', HeaderLogoDirective);
app.config(routes);
