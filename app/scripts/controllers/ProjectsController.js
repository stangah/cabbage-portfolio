'use strict';

var dependencies = ['$scope', '$stateParams', 'dataProvider'];

var ProjectsController = function($scope, $stateParams, dataProvider) {
  // Keeps position of thumbnails fixed when they reach top of window
  var $ = require('jquery');
  var container = $('.thumbnails-container');
  var spacer = $('.thumbnails-spacer');
  var pos = container.offset();
  $(window).scroll(function() {
    if($(this).scrollTop() > (pos.top - 20) && container.css('position') === 'static') { container.addClass('fixed'); spacer.show(); }
    else if($(this).scrollTop() <= (pos.top - 20) && container.hasClass('fixed')){ container.removeClass('fixed'); spacer.hide(); }
  });

  $scope.currentId = $stateParams.id || '01';
  $scope.thumbnailStyle = function(id) {
    return {
      'background': 'url("../images/thumbnail-' + $scope.label + '-' + id + '.png") 0 0',
      'background-repeat': 'no-repeat',
      'background-size': '70px'
    };
  };

  $scope.projects = dataProvider.projects.panes;

  $scope.label = dataProvider.projects.label;

  $scope.current = $scope.projects[$scope.currentId];
};

module.exports = dependencies.concat(ProjectsController);
