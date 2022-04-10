'use strict';

angular.module('products').component('products', {
  templateUrl: './products/products.template.html',
  controller: function ProductsCtrl() {
    this.data = {
      items: [
        {
          type: 'Child',
          img: 'item1',
          price: '3.20',
          name: 'T-SHIRT',
          options: ['Size', 'S', 'M', 'L', 'XL'],
        },
        {
          type: 'Child',
          img: 'item2',
          price: '13.30',
          name: 'Pants FORCLAZ',
          options: ['Size', 'M', 'XL'],
        },
        {
          type: 'Men',
          img: 'item1',
          price: '5.00',
          name: 'T-SHIRT',
          options: ['Size', 'XL'],
        },
        {
          type: 'Women',
          img: 'item2',
          price: '3.21',
          name: 'T-SHIRT',
          options: ['Size', 'S', 'M', 'L', 'XL'],
        },
        {
          type: 'Women',
          img: 'item3',
          price: '31',
          name: 'backpack',
          options: ['color', 'red', 'blue', 'black'],
        },
        {
          type: 'Other',
          img: 'item3',
          price: '0',
          name: 'car',
          options: ['color', 'red', 'blue', 'black'],
        },
      ],
    };

    this.getImageUrl = (image) => {
      const imageUrl = {
        item1: '../assets/img/item1.png',
        item2: '../assets/img/item2.png',
        item3: '../assets/img/item3.png',
      };

      return imageUrl[image];
    };

    this.showCategory = {
      men: true,
      women: true,
      child: false,
    };

    this.filterItem = (item) => {
      return this.showCategory[item.type.toLowerCase()];
    };

    this.changeFilter = (obj) => {
      return !this.showCategory[obj];
    };

    this.resetFilter = () => {
      for (let key in this.showCategory) {
        this.showCategory[key] = true;
      }
    };
  },
});
