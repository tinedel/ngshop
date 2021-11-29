import { Component, OnInit } from '@angular/core';
import {Product} from '../product';
import {PRODUCTS} from '../mock-products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {

  products = PRODUCTS;

  product: Product = {
    id: 1,
    name: 'Shelf',
    details: 'Nice sturdy shelf',
    price: 200.0,
    quantity: 0
  };

  constructor() { }

  ngOnInit(): void {
  }

  changeProduct(product: Product): void {
    this.product = product;
  }

  checkout(): void {
    window.alert(this.buildMessage());
  }

  private buildMessage(): string {
    return this.products.filter(p => p.quantity > 0).map(p => `You selected ${p.quantity} of ${p.name}\n`).reduce((a, b) => a + b);
  }
}
