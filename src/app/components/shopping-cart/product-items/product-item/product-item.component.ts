import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { AddToCartService} from 'src/app/services/add-to-cart.service'
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.sass']
})
export class ProductItemComponent implements OnInit {

  
  @Input() productItem: Product
  constructor(private addToCart: AddToCartService ) { }

  ngOnInit() {
  }

  handleAddToCart(){
    this.addToCart.sendMsg(this.productItem)
  }
}
