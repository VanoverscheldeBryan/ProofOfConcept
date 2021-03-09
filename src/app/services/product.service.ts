import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable} from 'rxjs'
import {Product} from '../models/product'

const apiUrl = 'http://localhost:3000/products' //later in een file steken dat je kan importen

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // products: Product[] = [
  //   new Product(1, 'Audi A3 V1', 'Dit is een lange beschrijving om een lange beschrijving weer te geven', 100),
  //   new Product(2, 'Audi A3 V2', 'Dit is een lange beschrijving om een lange beschrijving weer te geven', 150),
  //   new Product(3, 'Audi A3 V3', 'Dit is een lange beschrijving om een lange beschrijving weer te geven', 180)

  // ]

  constructor(private http: HttpClient) { }

  getProducts() : Observable<Product[]> {
    return this.http.get<Product[]>(apiUrl)
  }
  
  getProductById(idInt: String):Observable<Product>{
    const url = `http://localhost:3000/products/${idInt}`
    return this.http.get<Product>(url)
    // return this.products.find(x => x.id == +idInt)
  }
 

}
