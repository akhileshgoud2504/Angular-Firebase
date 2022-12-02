import { Component } from '@angular/core';
interface Book {
  name: string,
  author: string,
  image: string,
  amount: number
}
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  Books : Book[]= [
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
    }
  ]
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
}
