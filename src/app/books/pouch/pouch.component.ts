import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../../types/book';

@Component({
  selector: 'app-pouch',
  templateUrl: './pouch.component.html',
  styleUrls: ['./pouch.component.css']
})
export class PouchComponent implements OnInit {
  @Input() book : Book = {} as Book;
  @Output() BookEmitter = new EventEmitter<Book>();

  constructor (){}  
  ngOnInit(): void {}

  addToCart(){
    // console.log(this.book);
    this.BookEmitter.emit(this.book);
  }
}
