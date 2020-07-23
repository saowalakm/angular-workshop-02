import { Component, OnInit } from '@angular/core';
import { Product } from './../models/product'
import { ProductService }  from './../product.service' ;

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  filterData: string = "";

  constructor(public service: ProductService) { }

  ngOnInit(): void{
    // this.products = this.service.getAllProduct();
    this.getAll();
  }

  getAll(): void{     
    this.service.getAllProduct().subscribe((products) => 
    { return (this.products = products); });   
  }

  onRatingClicked(message: string): void{ 
    // console.log('Click on rating'); 
    alert(message);
  } 

}
