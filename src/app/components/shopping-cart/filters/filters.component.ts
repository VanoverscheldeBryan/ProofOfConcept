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
  public PriceMax: string = '';
  public PriceMin: string = '';

  public inputPriceMax$ = new Subject<string>();
  public inputPriceMin$ = new Subject<string>();

  public errorMessage: string = '';
  private _fetchProducts$: Observable<Product[]>;


  public productList: Product[] = [];


  constructor(private router: Router, private _route: ActivatedRoute) { }

  ngOnInit(): void {

    this.inputPriceMax$.pipe(distinctUntilChanged(), debounceTime(250)).subscribe(val => {
      this.PriceMax = val;
      this.updateQueryParams();

    })
    this.inputPriceMin$.pipe(distinctUntilChanged(), debounceTime(250)).subscribe(val => {
      this.PriceMin = val;
      this.updateQueryParams();
    })

  
  }

  updateQueryParams(){
    const params = {queryParams : {filterMax: this.PriceMax, filterMin : this.PriceMin}};
    this.router.navigate([''], params);
  }

}
