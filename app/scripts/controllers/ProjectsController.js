'use strict';

var dependencies = ['$scope', '$stateParams', 'projectsProvider'];

var ProjectsController = function($scope, $stateParams, projectsProvider) {
  // Keeps position of thumbnails fixed when they reach top of window
  var $ = require('jquery');
  var container = $('.thumbnails-container');
  var spacer = $('.thumbnails-spacer');
  var pos = container.offset();
  $(window).scroll(function() {
    if($(this).scrollTop() > (pos.top - 20) && container.css('position') === 'static') { container.addClass('fixed'); spacer.show(); }
    else if($(this).scrollTop() <= (pos.top - 20) && container.hasClass('fixed')){ container.removeClass('fixed'); spacer.hide(); }
  });

  $scope.currentId = $stateParams.id || 19;
  $scope.thumbnailStyle = function(id) {
    return {
      'background': 'url("../images/thumbnail-' + $scope.label + '-' + id + '.png") 0 0',
      'background-repeat': 'no-repeat',
      'background-size': '70px'
    };
  };

  $scope.projects = projectsProvider.panes;

  $scope.label = projectsProvider.label;

  $scope.current = $scope.projects[$scope.currentId];
};

module.exports = dependencies.concat(ProjectsController);
