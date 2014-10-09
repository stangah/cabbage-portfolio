'use strict';

var angular = require('angular');
var uiRouter = require('angular-ui-router');

var IllustrationsDataService = require('./services/IllustrationsDataService');
var UXUIDataService = require('./services/UXUIDataService');

var ShowcaseController = require('./controllers/ShowcaseController');
var ProjectsController = require('./controllers/ProjectsController');
var LinkFooterDirective = require('./directives/LinkFooterDirective');
var HeaderLogoDirective = require('./directives/HeaderLogoDirective');
var routes = require('./routes');

var app = angular.module('myApp', ['ui.router']);


app.constant('IllustrationsData', IllustrationsDataService);
app.constant('UXUIData', UXUIDataService);

app.controller('ShowcaseController', ShowcaseController);
app.controller('ProjectsController', ProjectsController);
app.directive('linkFooter', LinkFooterDirective);
app.directive('headerLogo', HeaderLogoDirective);
app.config(routes);
