import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products!: Product[];
  data!: Product;
  searchText: any;
  myClass = 'table-bordered';
  statusDirective = false;

  

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getProducts()
  }
  getProducts(){
    this.productService.getProducts().subscribe(data => {
      this.products = data
    })
  }
  changeStatus() {
    this.statusDirective = !this.statusDirective;
  }
  removeItem(id: number) {
    console.log(id);
    this.productService.removeProduct(id).subscribe(data=>{
      const question = confirm("Bạn cóa chắc muốn xóa?");
      if(question){
      this.products = this.products.filter(item => item.id != data.id)
      }
    })
  }
  onSubmit(event: any) {
    event.preventDefault();
  }
  detailItem(product: Product) {
    this.data = product;
  }

}
