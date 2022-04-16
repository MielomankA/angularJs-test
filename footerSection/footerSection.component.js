'use strict';

angular.module('footerSection').component('footerSection', {
  templateUrl: './footerSection/footerSection.template.html',
  controller: function FooterMenuCtrl() {
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
