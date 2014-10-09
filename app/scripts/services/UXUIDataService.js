'use strict';

var UXUIShowcase = {
  projects: [
    {id: '01', image: 'icon-uxui-01.gif'},
    {id: '02', image: 'icon-uxui-02.png'},
    {id: '03', image: 'placeholder-26.png'},
    {id: '04', image: 'placeholder-26.png'},
    {id: '05', image: 'placeholder-26.png'},
    {id: '06', image: 'placeholder-26.png'}
  ],

  title: 'UX & UI',

  section: 'uxui',

  buttonLink: '/#/illustrations',

  buttonClass: 'illustrations'

};
exports.showcase = UXUIShowcase;

var UXUIProjects = {

  label: 'uxui',
  panes: {
    '01': {
      title: 'Google Developer’s Console Icons',
      panes: [
        {
          image: 'icons-proj-01.png',
          text: 'These icons were created for Developer’s Console. From left to right, they represent Diff, Outline, Debug, History, and Work.'
        },
        {
          image: 'icons-proj-02.png',
          text: 'Developer’s console has been adding funtionality to become a web application for editing code. The icons are the most visual part of the new experience, and allows developers to switch between views and manage their work. These icons needed a consistent visual language and reflect the functionality for the code editor.'
        },
        {
          image: 'icons-proj-03.png',
          text: 'I started out by sketching different concepts on paper.'
        },
        {
          image: 'icons-proj-04.jpg',
          text: 'For Diff, I created nearly a hundred variations, some more figurative, some symbolic. For the Debug Icon, it was important to me that the bug looked visually appealing, as in it didn’t resemble a tick or a spider, and also had the visual sense that represents “Google”.'
        },
        {
          image: 'icons-proj-05.gif',
          text: 'In the end, we landed on icons that provided developers the quickest read. The icons were also geometrically constructed with generous negative space'
        },
        {
          image: 'icons-proj-06.png',
          text: 'According to the User testing, 5/6 identified “diff” icon, ALL identified “outline” icon, 3/6 identified “debug”, and 4/6 identified “history”. Given that there was no hover state available, these icons are considered very intuitive.'
        },
      ]
    },
    '02': {
      title: 'Ohey!',
      panes: [
        {
          image: 'ohey-01.png',
          text: ''
        },
        {
          image: 'ohey-02.jpg',
          text: ''
        },
        {
          image: 'ohey-03.gif',
          text: ''
        },
        {
          image: 'ohey-04.png',
          text: ''
        },
        {
          image: 'ohey-05.png',
          text: ''
        },
        {
          image: 'ohey-06.png',
          text: ''
        }
      ]
    },
    '03': {
      title: '',
      panes: []
    },
    '04': {
      title: '',
      panes: []
    },
    '05': {
      title: '',
      panes: []
    },
    '06': {
      title: '',
      panes: []
    }
  }

};
exports.projects = UXUIProjects;
