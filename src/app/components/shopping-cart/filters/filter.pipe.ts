import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/models/product';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(product: Product[], price: number): Product[] {
     if (price === undefined) return product;   
     return  product.filter(t=>t.price <= price);
   }
 
 }