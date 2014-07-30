'use strict';

var angular = require('angular');
var uiRouter = require('angular-ui-router');

var WelcomeCtrl = require('./controllers/WelcomeCtrl');
var LinkFooterDirective = require('./directives/LinkFooterDirective');
var HeaderLogoDirective = require('./directives/HeaderLogoDirective');
var routes = require('./routes');

var app = angular.module('myApp', ['ui.router']);


app.controller('WelcomeCtrl', ['$scope', WelcomeCtrl]);
app.directive('linkFooter', LinkFooterDirective);
app.directive('headerLogo', HeaderLogoDirective);
app.config(routes);
