import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { BooksComponent } from "./books/books.component";
import { CartComponent } from "./cart/cart.component";

const routes :Routes = [
    {path: 'login',component : LoginComponent},
    {path: 'register',component : RegisterComponent},
    {path: '',component : BooksComponent},
    {path: 'cart',component : CartComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {};