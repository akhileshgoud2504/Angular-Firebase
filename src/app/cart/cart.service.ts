import { Injectable } from '@angular/core';
import { Book } from '../types/book';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart : Book[] =[];
  constructor() { }
  add(book: Book){
    this.cart.push(book);
  }
  get() : Book[]{
    return this.cart;
  }
  remove(book: Book){
    this.cart = this.cart.filter((selectedbook) => selectedbook != book);
  }
}
