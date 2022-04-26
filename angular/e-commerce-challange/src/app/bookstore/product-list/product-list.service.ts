import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductListService {
  private baseUrl = 'http://localhost:3000/products';

  constructor(private httpClient: HttpClient) {}

  index() {
    return this.httpClient.get<Array<Product>>(this.baseUrl);
  }
}
