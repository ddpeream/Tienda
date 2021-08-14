import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Product} from '../../model/product.model'
import { environment } from '../../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ProductsService { 

  constructor(
    private http: HttpClient 
  ) { }

  getAllProducts() {
    return this.http.get<Product[]>(environment.BASE_URL)
  }


  getProduct(id: string) {
    return this.http.get<Product>(`${environment.BASE_URL}/${id}`)
  }

  createProduct (product: Product) {
    return this.http.post(`${environment.BASE_URL}`, product);
  }

  editProduct(id: string, change: Partial<Product>) {
    return this.http.put(`${environment.BASE_URL}/${id}`, change);
  }
  
  deleteProduct(id: string) {
    return this.http.delete(`${environment.BASE_URL}/${id}`)
  }

}
