import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, Observable, Subject } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.sass']
})
export class FiltersComponent implements OnInit {
  public filterProductName: string = '';
  public filterProduct$ = new Subject<string>();
  public errorMessage: string = '';
  private _fetchProducts$: Observable<Product[]>;


  public productList: Product[] = [];


  constructor(private productService: ProductService, private router: Router, private _route: ActivatedRoute) { }

  ngOnInit(): void {

    this.filterProduct$.pipe(distinctUntilChanged(), debounceTime(250)).subscribe(val => {
      const params = val ? {queryParams : {filter: val}}: undefined
      this.router.navigate([''], params);
    })
  
    this._route.queryParams.subscribe(params => {
      this.productService
        .fetchProducts$(params['filter'])
        .pipe(
          catchError((err) => {
            this.errorMessage = err;
            return EMPTY;
          })
        )
        .subscribe(val => (this.productList = val));
      if (params['filter']) {
        this.filterProductName = params['filter'];
      }
    });
  
  }
  // applyFilter(filter: string) {
  //   this.filterProductName = filter;
  // }

  // get products$(): Observable<Product[]> {
  //   return this._fetchProducts$;
  // }


}
