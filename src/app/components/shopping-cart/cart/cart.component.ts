import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import {AddToCartService} from 'src/app/services/add-to-cart.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {


  cartItems = [
    // {
    //   id: 1, productId: 1, productName: "Test 1", quantity: 5, price: 100
    // },
    // {
    //   id: 2, productId: 3, productName: "Test 3", quantity: 2, price: 10
    // },
    // {
    //   id: 3, productId: 2, productName: "Test 2",  quantity: 9, price: 105
    // },
    // {
    //   id: 4, productId: 4, productName: "Test 4", quantity: 4, price: 100
    // }
  ]

  cartTotal = 0

  constructor(private addToCart : AddToCartService) { }

  ngOnInit(): void {
    

    this.addToCart.getMsg().subscribe((product: Product) =>{
    this.addProductToCart(product)
  })



}
addProductToCart(product: Product){
  let productExists = false

  for (let i in this.cartItems){
    if (this.cartItems[i].productId === product.id){
      this.cartItems[i].quantity++
      productExists = true
      break
    }
  }

  if(!productExists){
  this.cartItems.push({
    productId : product.id,
    productName: product.name,
    quantity : 1,
    price: product.price
  })
  }
//   this.cartItems.push({
//     productId : product.id,
//     productName: product.name,
//     quantity : 1,
//     price: product.price
//   })
this.cartTotal = 0
this.cartItems.forEach(item => {
  this.cartTotal += (item.quantity * item.price)
})
}
}
