import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksService } from './books.service';
import { BooksComponent } from './books.component';
import { PouchComponent } from './pouch/pouch.component';



@NgModule({
  declarations: [BooksComponent,PouchComponent],
  providers: [BooksService],
  imports: [
    CommonModule
  ],
  exports : [BooksComponent]
})
export class BooksModule { }
