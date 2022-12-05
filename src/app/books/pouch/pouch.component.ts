import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { Book } from '../../types/book';

@Component({
  selector: 'app-pouch',
  templateUrl: './pouch.component.html',
  styleUrls: ['./pouch.component.css']
})
export class PouchComponent implements OnInit {
  @Input() book : Book = {} as Book;
  @Output() BookEmitter = new EventEmitter<Book>();

  constructor (private cartService:CartService){}  
  ngOnInit(): void {}
  inCart = false;
  addToCart(){
    this.inCart = true;
    // console.log(this.book);
    this.cartService.add(this.book);
    // this.BookEmitter.emit(this.book);
  }
  removeFromCart(){
    this.inCart = false;
    this.cartService.remove(this.book);
  }
}
