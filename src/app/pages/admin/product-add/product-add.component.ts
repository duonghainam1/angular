import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductServicesService } from '../../../services/product-services.service';
import { Router } from '@angular/router';
import { IProduct } from '../../../interface/products';


@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent {
  constructor(private productsService: ProductServicesService, private formBuilder: FormBuilder, private router: Router) { }

}

