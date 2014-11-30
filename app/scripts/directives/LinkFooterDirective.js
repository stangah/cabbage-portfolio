'use strict';

var LinkFooterDirective = function() {
  return {
    restrict: 'E',
    templateUrl: '../views/link-footer.html',
    controller: 'MainController'
  };
};

module.exports = LinkFooterDirective;
