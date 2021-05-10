import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Product} from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }



  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.host}/product`)
  }

  getAllAvailableProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.host}/product?available=true`)
  }

  getAllSelectedProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.host}/product?selected=true`)
  }

  searchProduct(keyword: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.host}/product?name_like=${keyword}`)
  }

  select(product: Product): Observable<Product> {
    product.selected = !product.selected
    return this.http.put<Product>(`${environment.host}/product/product.id`, product);
  }

  delete(product: Product): Observable<void> {
    return this.http.delete<void>(`${environment.host}/product/${product.id}`)
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(`${environment.host}/product`,product)
  }
}
