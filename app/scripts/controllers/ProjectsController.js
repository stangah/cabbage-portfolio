'use strict';

var ProjectsController = function($scope, $stateParams) {
  $scope.id = $stateParams.id || 19;

  $scope.projects = {
    '17': {
      title: 'Old person',
      panes: []
    },

    '18': {
      title: 'Cardboard letters',
      panes: []
    },

    '19': {
      title: 'Kattish',
      panes: [
        {
          image: 'img-23.png',
          text: 'This project was inspired by Pokemon because they are very cute and magical. The instructor of this Poke project was Brett Macfadden of Macfadden and Thorpe. It had the honor to be featured in Elle magazine as a tribute to the recent Poke master\'s death. The incident was such morbid.'
        },
        {
          image: 'img-24.png',
          text: 'Little text like this can explain each image within the project. For example, "This is an early exploration that led to xoxoxo."'
        },
        {
          image: 'img-25.png',
          text: 'Little text like this can explain each image within the project. For example, "This is an early exploration that led to xoxoxo."'
        }
      ]
    },
    '20': {
      title: 'Rabbit thing',
      panes: []
    },
    '21': {
      title: 'Lol blocks',
      panes: []
    },
    '22': {
      title: 'I don\'t even know',
      panes: []
    }
  };

  $scope.current = $scope.projects[$scope.id];
};

module.exports = ProjectsController;