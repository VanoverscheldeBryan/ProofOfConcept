import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse,HttpParams} from '@angular/common/http'
import { Observable, throwError} from 'rxjs'
import {Product} from '../models/product'
import {catchError, map } from 'rxjs/operators';


const apiUrl = 'http://localhost:3000/products' //later in een file steken dat je kan importen

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private http: HttpClient) { }

  getProducts() : Observable<Product[]> {
    return this.http.get<Product[]>(apiUrl);
  }
  
  getProductById(idInt: String):Observable<Product>{
    const url = `http://localhost:3000/products/${idInt}`;
    return this.http.get<Product>(url);
  }


  fetchProducts$(price?: string) {
    let params = new HttpParams();
    params = price ? params.append('price', price) : params;
    return this.http.get<Product[]>(apiUrl, { params }).pipe(
      catchError(this.handleError),
      map((list: any[]): Product[] => list.map(Product.fromJSON))
    );
  }

 
  handleError(err: any): Observable<never> {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else if (err instanceof HttpErrorResponse) {
      console.log(err);
      errorMessage = `'${err.status} ${err.statusText}' when accessing '${err.url}'`;
    } else {
      errorMessage = err;
    }
    return throwError(errorMessage);
  }
}
