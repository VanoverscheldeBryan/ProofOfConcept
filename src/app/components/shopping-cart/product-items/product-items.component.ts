import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import {ProductService} from 'src/app/services/product.service'

@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.sass']
})
export class ProductItemsComponent implements OnInit {

  productList: Product[] = []

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.productList = products
    })
  }


}
