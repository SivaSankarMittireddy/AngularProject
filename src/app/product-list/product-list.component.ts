import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { PRODUCT } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
products:Observable<PRODUCT[]>;
  constructor(private product:ProductService,private router:Router) { }
  
getData(){
  this.products=this.product.getProductsList()
}

  ngOnInit(): void {
    this.getData();
  }


   deleteProduct(id:number){
     this.product.deleteProducts(id).subscribe(data=>{
       console.log(data);
       this.getData();
     },
     error =>console.log(error));
   }


   getdetails(id:number){
     this.router.navigate(['details',id]);     
   }


   update(id:number){
     this.router.navigate(['update',id])
   }
add(){
  this.router.navigate(['create'])
}
home(){
  this.router.navigate(['home'])
}
home1(){
  this.router.navigate(['base'])
}
}
