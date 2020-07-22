import { Injectable } from '@angular/core';
import { Product } from './models/product';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProoduct(): Observable<Product[]> {     
    return this.http.get<Product[]>
    ('http://165.22.255.58:3000/products');   
  }

  // getAllProduct(): Product[]{
  //   const products: Product[] = [];
  //   const p1 = new Product('01', 'Name 01   ', 100.0);
  //   const p2 = new Product('02', 'Name 02        ', 200.5);
  //   const p3 = new Product('03', 'Name 03 ', 300.75);
  //   products.push(p1, p2, p3);
  //   return products;
  // }
}
