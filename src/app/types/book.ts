export interface Book {
    name: string,
    author: string,
    image: string,
    amount: number
  }

export interface Auth {
  email : string,
  password: string,
  confirmPassword?:string
}