import { Component, OnInit } from '@angular/core';
import { Book } from '../types/book';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor (private bookService: BooksService){

  }  
  
  Books : Book[]= [];
  ngOnInit(): void {
    this.Books = this.bookService.getBooks();
  }
  isDisabled=false 

  handleClick(){
    this.isDisabled=true
    alert('Hi');
  }
  Name='';
  isShowing=true;
  //Not needed because of two way binding
  // handleInput(event:any){
  //   console.log(event)
  //   this.Name=event.target.value;
  // }

  toogleBooks(){
    this.isShowing = !this.isShowing;
  }
  // addToCart(event:any){
  //   console.log(event);
  // }
}
