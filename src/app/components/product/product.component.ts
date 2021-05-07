import {Component, OnInit} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Product} from 'src/app/models/product';
import {ProductService} from 'src/app/service/product.service';
import {AppDataState, DataStateEnum} from 'src/app/state/product.state';
import {catchError, map, startWith} from "rxjs/operators";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products$?: Observable<AppDataState<Product[]>>
  readonly dataStateEnum = DataStateEnum

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

      getAllproducts() {
      this.products$ = this.productService.getAllProducts().pipe(
      map((data) => ({dataState: DataStateEnum.LOADED, data: data})),
      startWith({dataState: DataStateEnum.LOADING}),
      catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage: err.message}))
      )
  }

      getAllAvailableproducts() {
      this.products$ = this.productService.getAllAvailableProduct().pipe(
      map((data) => ({dataState: DataStateEnum.LOADED, data: data})),
      startWith({dataState: DataStateEnum.LOADING}),
      catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage: err.message}))
      )
   }

      getAllSelectedproducts() {
      this.products$ = this.productService.getAllSelectedProduct().pipe(
      map((data) => ({dataState: DataStateEnum.LOADED, data: data})),
      startWith({dataState: DataStateEnum.LOADING}),
      catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage: err.message}))
      )
    }

      onSearch(dataForm: any) {
      this.products$ = this.productService.searchProduct(dataForm.keyword).pipe(
      map((data) => ({dataState: DataStateEnum.LOADED, data: data})),
      startWith({dataState: DataStateEnum.LOADING}),
      catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage: err.message}))
      )
    }

  select(p: Product) {
    this.productService.select(p).subscribe(
       data => {
         p.selected = data.selected
       }
     )
  }

  delete(p: Product) {
    let s = confirm('etes vous sur de vouloir supprimer !')
    if(s) {
      this.productService.delete(p).subscribe(
        data => {
        this.getAllproducts()
      }
    )
    }

 }
}
