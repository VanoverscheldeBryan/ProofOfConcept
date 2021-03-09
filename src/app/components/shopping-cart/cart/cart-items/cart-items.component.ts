import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.sass']
})
export class CartItemsComponent implements OnInit {

  @Input() cartItem : any
  
  constructor() { }

  ngOnInit(): void {
  }

}
