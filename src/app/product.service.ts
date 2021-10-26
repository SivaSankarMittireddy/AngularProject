import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url=" http://localhost:3000/products";


  constructor(private http:HttpClient) { }

  getProductsList():Observable<any>{
    return this.http.get(this.url);
  }


  deleteProducts(id:number):Observable<any>{
    return this.http.delete(`${this.url}/${id}`); 
  }


  getProduct(id:number):Observable<any>{
    return this.http.get(`${this.url}/${id}`);
  }


  addproducts(data:any){
    return this.http.post(this.url,data);
  }



  updateProducts(id:number,value:any):Observable<any>{
    return this.http.put(`${this.url}/${id}`,value);
  }
}
