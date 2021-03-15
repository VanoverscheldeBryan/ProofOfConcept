import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, Observable, Subject } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, max } from 'rxjs/operators';
import { Product } from 'src/app/models/product';
import {ProductService} from 'src/app/services/product.service'

@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.sass']
})
export class ProductItemsComponent implements OnInit {
  public filterProductPriceMax: string = '';
  public filterProduct$ = new Subject<string>();
  public errorMessage: string = '';
  private _fetchProducts$: Observable<Product[]>;
  public allProducts :  Observable<Product[]>
  public maxPrice = 0
  public minPrice = 0



  public productList: Product[] = [];

  constructor(private productService: ProductService, private router: Router, private _route: ActivatedRoute
    ) { }

  ngOnInit(): void {
  

    this.allProducts = this.productService.getProducts()

    this._route.queryParams.subscribe(params => {
      this.maxPrice = +params.filterMax;
      this.minPrice = +params.filterMin;


        this.allProducts
        .subscribe(val => {
          this.productList = val;
          
          this.productList = this.productService.filterProductsByPrice$(this.productList, this.maxPrice, this.minPrice);


        });
      
    });

    

  }



}
