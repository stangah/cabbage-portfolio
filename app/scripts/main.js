'use strict';

var angular = require('angular');
var uiRouter = require('angular-ui-router');

var IllustrationsController = require('./controllers/IllustrationsController');
var IllustrationsProjectsService = require('./services/IllustrationsProjectsService');

var UXUIController = require('./controllers/UXUIController');
var UXUIProjectsService = require('./services/UXUIProjectsService');

var ProjectsController = require('./controllers/ProjectsController');
var LinkFooterDirective = require('./directives/LinkFooterDirective');
var HeaderLogoDirective = require('./directives/HeaderLogoDirective');
var routes = require('./routes');

var app = angular.module('myApp', ['ui.router']);


app.controller('IllustrationsController', IllustrationsController);
app.constant('IllustrationsProjects', IllustrationsProjectsService);

app.controller('UXUIController', UXUIController);
app.constant('UXUIProjects', UXUIProjectsService);

app.controller('ProjectsController', ProjectsController);
app.directive('linkFooter', LinkFooterDirective);
app.directive('headerLogo', HeaderLogoDirective);
app.config(routes);
