import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/product.service';
import firebase from 'firebase'
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  // @Output() data = new EventEmitter<ProductType>();
  product: Product = {
    id: 0,
    name: '',
    price: 0,
    desc: '',
    status: false,
    img: ''
  };
  // product: ProductType = new ProductType()
  constructor(private productService: ProductService,
              private router: Router) {}

  ngOnInit() {}

  onAddImage(e: any){
    const file = e.target.files[0];
    let storeRef= firebase.storage().ref(`images/${file.name}`);
    storeRef.put(file).then(e => {
      storeRef.getDownloadURL().then(async(url) => {
        this.product.img = url
      })
    })
  }
  
  onAddProduct() {
    this.productService.addProduct(this.product).subscribe(data=>{
      console.log(data);
      alert("Thêm thành công!!!");
      this.router.navigateByUrl('/admin/product');
    });
  }
}
