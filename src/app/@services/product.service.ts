import { Injectable } from '@angular/core';
import { Product } from '../@models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Product[] {
    return [
      {
        id: 1,
        name: 'iPhone X',
      },
      {
        id: 2,
        name: 'Samsung Galaxy S10',
      }
    ];
  }
}
