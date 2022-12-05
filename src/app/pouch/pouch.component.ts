import { Component, Input } from '@angular/core';
import { Book } from '../types/book';

@Component({
  selector: 'app-pouch',
  templateUrl: './pouch.component.html',
  styleUrls: ['./pouch.component.css']
})
export class PouchComponent {
  @Input() book : Book = {} as Book
}
