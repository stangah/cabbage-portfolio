'use strict';

var UXUIShowcase = {
  projects: [
    {
      id: '01',
      image: 'icon-uxui-01.gif',
      title: 'Google Developer’s Console',
      text: 'Geometrically designed icons that represent functions of the Developer’s Console, including Diff, Outline, Debug, History, and Work.'
    },
    {
      id: '02',
      image: 'icon-uxui-02.png',
      title: 'Ohey Messaging App',
      text: 'By combining facial recognition and GPS tracking, Ohey allows you to message people in your physical proximity.'
    },
    {
      id: '03',
      image: 'icon-uxui-03.png',
      title: 'Skyfad',
      text: 'A Taiwanese-based mobile app that connects consumers with local boutiques.'
    },
    {
      id: '04',
      image: 'icon-uxui-04.png',
      title: 'Google Cloud Pipelines',
      text: 'The redesigning of pipelines allowed developers to easily track their code through stages Dev, Test, and Prod.'
    },
    {
      id: '05',
      image: 'icon-uxui-05.png',
      title: 'NoNeed Drug Information App',
      text: 'NoNeed is a mobile app aiming to educate youth about the real consequences of drug usage, as well as provide a platform for those seeking help.'
    },
    {
      id: '06',
      image: 'icon-uxui-06.png',
      title: 'Crowdtilt',
      text: 'I interned at Crowdtilt (now simply known as “Tilt”) over the fall of 2013.'
    }
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
          text: 'Ohey is a mobile app that embraces the anti-socialness of young people today. This was a project for <a href="http://www.myintdesign.com/" target="_blank">Karin Myint’s</a> Typography class.'
        },
        {
          image: 'ohey-02.png',
          text: 'The site map features messaging, camera and map views, and basic account access.'
        },
        {
          image: 'ohey-03.gif',
          text: 'The loading pages in a simple, elegant animation of the conceptual text that this assignment was based on.'
        },
        {
          image: 'ohey-04.png',
          text: 'Ohey allows you to message people in your physical proximity.'
        },
        {
          image: 'ohey-05.png',
          text: 'The user can also customize the perimeter you want to be visible in. This is useful if the user is concerned about his/her privacy and wants to avoid any possibility of someone utilizing this app to track them down.'
        },
        {
          image: 'ohey-06.png',
          text: 'By combining facial recognition and GPS tracking, Ohey will be able to display other users in your physical proximity.'
        }
      ]
    },
    '03': {
      title: 'Skyfad',
      panes: [
        {
          image: 'skyfad-01.jpg',
          text: 'As services such as Yelp currently seize to exist in Asia, Skyfad was an effort to give local boutiques hidden in small alleys a platform to connect with their users.'
        },
        {
          image: 'skyfad-02.jpg',
          text: 'This is the second visual direction explored for Skyfad.'
        }
      ]
    },
    '04': {
      title: 'Pipelines',
      panes: [
        {
          image: 'pipelines-01.gif',
          text: 'These are a few iterations we explored for the general formatting of Pipelines. We needed the different stages to be chronological, but all connected. Some of these explorations even include two sets of Pipelines (Pipeline One / Pipeline Two) but in the end looked overly complex.'
        },
        {
          image: 'pipelines-02.png',
          text: 'The original design featured a simple list style as well as radio buttons to access settings, cancel, retry, and promote. My goal was to improve the hierarchy of the list and the usability of the actions.'
        },
        {
          image: 'pipelines-03.png',
          text: 'The result was a flat card style that spoke to Material Design, as well as directly implemented action buttons. However, according to a user-testing conducted by our researcher, the upward facing arrows were chronologically confusing.'
        },
        {
          image: 'pipelines-04.png',
          text: 'To fix this, I changed the reading direction of the contents to a more expected top-to-bottom. This page was featured in the Google IO 2014.'
        },
        {
          image: 'pipelines-05.png',
          text: 'I also created an introductory info-graphic for the Getting Started page for new Pipeline users.'
        },
        {
          image: 'pipelines-06.png',
          text: 'The Pipelines Tasks page was redesigned as well to balance hierarchy, aesthetics, and information density.'
        },
        {
          image: 'pipelines-07.png',
          text: 'The Pipelines History page was cleaned up as well. I simplified the distracting horizontal lines and improved information density, which also improved the page’s overall scanability.'
        }
      ]
    },
    '05': {
      title: 'No Need',
      panes: [
        {
          image: 'noneed-01.png',
          text: 'NoNeed is a mobile app concepts that aims to educate youth about drug usage. This was a project for <a href="https://www.linkedin.com/in/kellymk" target="_blank">Kelly Murdoch-kitt’s</a> interactive design class.'
        },
        {
          image: 'noneed-02.png',
          text: 'We conducted in-depth user research and interviews. This included creating personas, scenarios, and user-flows.'
        },
        {
          image: 'noneed-03.png',
          text: ''
        },
        {
          image: 'noneed-04.png',
          text: ''
        },
        {
          image: 'noneed-05.png',
          text: ''
        },
        {
          image: 'noneed-06.png',
          text: ''
        },
        {
          image: 'noneed-07.png',
          text: ''
        },
        {
          image: 'noneed-08.png',
          text: ''
        },
        {
          image: 'noneed-09.png',
          text: ''
        },
        {
          image: 'noneed-10.png',
          text: ''
        },
        {
          image: 'noneed-11.png',
          text: 'We used note cards to map out all the content we thought the app needed in included. We then organized them into categories with hierarchical consideration.'
        },
        {
          image: 'noneed-12.png',
          text: 'These note cards were then conceptualized into a full site-map.'
        },
        {
          image: 'noneed-13.jpg',
          text: 'For the first round of mocks, I explored image-backgrounds that spoke to the content.'
        },
        {
          image: 'noneed-14.jpg',
          text: 'In the end, the result was a cleaner, simpler palette that allowed users to focus on the content itself.'
        }
      ]
    },
    '06': {
      title: 'Crowdtilt',
      panes: [
        {
          image: 'crowdtilt-01.png',
          text: 'Throughout my internship, I worked both the design team and marketing team. Alongside the marketing team, I created pixel-perfect emails that followed a strict grid.'
        },
        {
          image: 'crowdtilt-02.png',
          text: 'I also worked on mobile friendly infographics that illustrated successful tilts. A tilt means that a targeted amount of funds have been raised. The fund is often used towards social good.'
        },
        {
          image: 'crowdtilt-03.png',
          text: 'This was a poster used in-house that featured bobble-heads that were recently purchased around the office.'
        }
      ]
    }
  }

};
exports.projects = UXUIProjects;
