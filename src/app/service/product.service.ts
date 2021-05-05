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
    return this.http.get<Product[]>(`${environment.host}/products`)
  }

  getAllAvailableProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.host}/products?available=true`)
  }

  getAllSelectedProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.host}/products?selected=true`)
  }

  searchProduct(keyword: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.host}/products?key=${keyword}`)
  }
}
