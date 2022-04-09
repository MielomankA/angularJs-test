'use strict';

angular.module('intro').component('intro', {
  templateUrl: './intro/intro.template.html',
  controller: [
    'introCtrl',
    function Intro(introCtrl) {
      var self = this;
    },
  ],
  // controller: [
  //   '$routeParams',
  //   'Phone',
  //   function PhoneDetailController($routeParams, Phone) {
  //     var self = this;
  //     self.phone = Phone.get({ phoneId: $routeParams.phoneId }, function (phone) {
  //       self.setImage(phone.images[0]);
  //     });

  //     self.setImage = function setImage(imageUrl) {
  //       self.mainImageUrl = imageUrl;
  //     };
  //   },
  // ],
});
