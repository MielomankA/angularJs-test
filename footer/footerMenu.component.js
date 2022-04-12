'use strict';

angular.module('footerMenu').component('footerMenu', {
  templateUrl: './footer/footerMenu.template.html',
  controller: function menuCtrl() {
    this.data = {
      footerMenu: [
        {
          name: 'Credits',
          link: 'https://softswiss.com/',
          title: 'credits',
        },
        {
          name: 'Privacy',
          link: 'https://softswiss.com/',
          title: 'privacy',
        },
        {
          name: 'About',
          link: 'https://www.softswiss.com/about-us/',
          title: 'about us',
        },
        {
          name: 'Contact',
          link: 'https://www.softswiss.com/contact-us/',
          title: 'contact us',
        },
      ],
    };
  },
});
