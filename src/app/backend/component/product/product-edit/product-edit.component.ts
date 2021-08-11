import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/product.service';
import firebase from 'firebase'

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product!: Product;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getInfo()
  }
  getInfo() {
    this.activatedRoute.params.subscribe(params => {
      this.productService.getId(params.id).subscribe(data => {
        this.product = data;
      });
    });
  }
  onUpdateImage(e: any){
    const file = e.target.files[0];
    let storeRef= firebase.storage().ref(`images/${file.name}`);
    storeRef.put(file).then(e => {
      storeRef.getDownloadURL().then(async(url) => {
        this.product.img = url
      })
    })
  }
  onUpdateProduct() {
    this.productService.updateProduct(this.product).subscribe(data => {
      alert('Bạn đã cập nhật thành công');
      this.router.navigateByUrl('admin/product');
    });
  }
}
