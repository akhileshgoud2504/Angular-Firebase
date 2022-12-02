import { Component } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  name1 = 'white pouch'
  author1 = 'raghuvaran'
  src1 = "https://m.media-amazon.com/images/I/51bzAAbVPrL._SY879_.jpg"
  name2 = "black pouch"
  author2 = 'raghuvaran'
  src2 = "https://m.media-amazon.com/images/I/61exsXR8IxL._SX679_.jpg"
  isDisabled=false 

  handleClick(){
    this.isDisabled=true
    alert('Hi');
  }
}
