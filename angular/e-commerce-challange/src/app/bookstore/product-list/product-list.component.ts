import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { ProductListService } from './product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productListService: ProductListService) {}

  ngOnInit(): void {
    this.productListService.index().subscribe({
      next: (products) => (this.products = products),
      error: (err) => console.error(err),
    });
  }
}
