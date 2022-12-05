import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { BooksComponent } from './books/books.component';
import { PouchComponent } from './pouch/pouch.component';
@NgModule({
    declarations : [AppComponent, BooksComponent, PouchComponent],
    imports : [BrowserModule,FormsModule],
    bootstrap : [AppComponent]
})

export class AppModule{ };