import { Component, OnInit } from '@angular/core';
import {Product} from './../models/product'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor() { }

  ngOnInit(): void {

    const p1 = new Product('01', 'Name 01', 100.0);
    const p2 = new Product('02', 'Name 02', 200.5);
    const p3 = new Product('03', 'Name 03', 300.75);
    this.products.push(p1, p2, p3);

  }

}
