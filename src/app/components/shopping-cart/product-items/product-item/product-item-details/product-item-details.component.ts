import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-item-details',
  templateUrl: './product-item-details.component.html',
  styleUrls: ['./product-item-details.component.sass']
})
export class ProductItemDetailsComponent implements OnInit {


  product:Product;


  sub: Subscription;
  id : String;

  constructor(private productService: ProductService,
    private router: ActivatedRoute) { }

  ngOnInit(): void {
   
    this.sub = this.router.paramMap.subscribe(params => {
      this.id = params.get("id");
    })

     this.productService.getProductById(this.id).subscribe((products) => {
      this.product = products;
     }) 

  }

}
