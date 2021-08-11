import { Injectable } from '@angular/core';
// import { MockData } from './MockData';
import {Product} from './product';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {
// products: ProductType[] = MockData
API: string = 'https://60f7847f9cdca00017454e8e.mockapi.io/product';
constructor(private http: HttpClient) {}
getProducts(): Observable<Product[]>{
 return this.http.get<Product[]>(this.API);
}
getId(id: number): Observable<Product> {
  return this.http.get<Product>(`${this.API}/${id}`);
}
addProduct(item: any): Observable<Product>{
  return this.http.post<Product>(this.API, item);
}
removeProduct(id: number): Observable<Product>{
  return this.http.delete<Product>(`${this.API}/${id}`)
}
updateProduct(item: Product): Observable<Product> {
  return this.http.put<Product>(`${this.API}/${item.id}`, item);
}
}
