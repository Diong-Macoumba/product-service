import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../service/product.service";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  productFormGroup?: FormGroup
  productId?: number

  constructor(private productService: ProductService, private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute) {
    this.productId = this.activatedRoute.snapshot.params.id
    console.log(this.productId)
  }

  ngOnInit(): void {
      this.productService.find(this.productId).subscribe(
        product => {
          this.productFormGroup = this.formBuilder.group(
            {
              name: [product.name, Validators.required],
              price: [product.price, Validators.required],
              quantity: [product.quantity, Validators.required],
              available: [product.available, Validators.required],
              selected: [product.selected, Validators.required]
            }
          )
        }
      )
  }

  update() {

  }
}
