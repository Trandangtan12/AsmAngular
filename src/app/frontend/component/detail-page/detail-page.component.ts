import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {
  product!: Product;
  constructor(private productService: ProductService,
             private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getInfor()
  }
  getInfor(){
    this.activatedRoute.params.subscribe(params => {
      this.productService.getId(params.id).subscribe(data => {
        this.product = data;
      })
    })
  }
}
