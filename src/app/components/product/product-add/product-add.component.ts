import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productFormGroup?: FormGroup
  submitted: boolean = false

  constructor(private productService: ProductService, private formBuilder: FormBuilder) {

    this.productFormGroup = this.formBuilder.group(
      {
        name: ["", Validators.required],
        price: [0, Validators.required],
        quantity: [0, Validators.required],
        available: [true, Validators.required],
        selected: [false, Validators.required]
      }
    )
  }

  ngOnInit(): void {
  }

  create() {
    this.submitted = true
    if (this.productFormGroup?.valid) {
      this.productService.create(this.productFormGroup?.value).subscribe(
        data => {
          console.log(data)
        }
      )
    }
  }
}
