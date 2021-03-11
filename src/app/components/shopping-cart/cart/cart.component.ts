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

this.cartTotal = 0
this.cartItems.forEach(item => {
  this.cartTotal += (item.quantity * item.price)
})
}
}
