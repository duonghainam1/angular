import { ProductServicesService } from './../../../services/product-services.service';
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IProduct } from '../../../interface/products';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  productService = inject(ProductServicesService)
  products: IProduct[] = []
  async ngOnInit() {
    this.products = await lastValueFrom(this.productService.getAll())
  }
  deleteProducts(id: number | string) {
    const confirm = window.confirm("Bạn có muốn xóa không")
    if (confirm) {
      this.productService.deleteProducts(id).subscribe(() => {
        alert("Xóa thành công")
        this.products = this.products.filter(item => item.id !== id)
      })
    }
  }
}
