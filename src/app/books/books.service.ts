import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  constructor() { }
  getBooks(){
    return [
      {
        name: 'white pouch',
        author: 'amazon',
        image:"https://m.media-amazon.com/images/I/51bzAAbVPrL._SY879_.jpg",
        amount: 700
      },
      {
        name:  "black pouch",
        author:  'amazon',
        image: "https://m.media-amazon.com/images/I/61exsXR8IxL._SX679_.jpg",
        amount: 1200
      },
      {
        name: 'white pouch',
        author: 'flipkart',
        image:"https://m.media-amazon.com/images/I/51bzAAbVPrL._SY879_.jpg",
        amount: 600
      },
      {
        name:  "black pouch",
        author: 'flipkart',
        image: "https://m.media-amazon.com/images/I/61exsXR8IxL._SX679_.jpg",
        amount: 1100
      }
    ];
  }
}
