'use strict';

var angular = require('angular');
var uiRouter = require('angular-ui-router');

var IllustrationsController = require('./controllers/IllustrationsController');
var ProjectsController = require('./controllers/ProjectsController');
var LinkFooterDirective = require('./directives/LinkFooterDirective');
var HeaderLogoDirective = require('./directives/HeaderLogoDirective');
var routes = require('./routes');

var app = angular.module('myApp', ['ui.router']);


app.controller('IllustrationsController', ['$scope', IllustrationsController]);
app.controller('ProjectsController', ['$scope', '$stateParams', ProjectsController]);
app.directive('linkFooter', LinkFooterDirective);
app.directive('headerLogo', HeaderLogoDirective);
app.config(routes);
