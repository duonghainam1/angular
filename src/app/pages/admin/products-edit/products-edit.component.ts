import { routes } from './../../../app.routes';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductServicesService } from '../../../services/product-services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../../../interface/products';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-products-edit',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './products-edit.component.html',
  styleUrl: './products-edit.component.css'
})
export class ProductsEditComponent {
  constructor(private productsService: ProductServicesService, private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      const id = params['id']
      this.productsService.getById(id).subscribe(product => {
        this.form.patchValue(product)
      })
    })
  }
  form = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required]],
    quantyti: [0,],
    image: ['', [Validators.required]],
    description: ['']
  })
  onSubmit() {
    if (this.form.invalid) return
    const id = this.route.snapshot.params['id']
    this.productsService.updateProducts({ id, ...this.form.value } as IProduct).subscribe(() => {
      alert("Cập nhật thành công")
      this.router.navigateByUrl("/admin/products")
    })
  }
}
