import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductAddComponent } from './components/product/product-add/product-add.component';
import { ProductComponent } from './components/product/product.component';
import {ProductEditComponent} from "./components/product/product-edit/product-edit.component";

const routes: Routes = [
  { path : "products", component: ProductComponent },
  { path : "products/add", component: ProductAddComponent },
  { path : "products/edit/:id", component: ProductEditComponent },
  { path : "", component : HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
