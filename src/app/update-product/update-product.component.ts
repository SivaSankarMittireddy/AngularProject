import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PRODUCT } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
 id:number=0;
 product1:PRODUCT=new PRODUCT;
  constructor(private route:ActivatedRoute,private proservice:ProductService,private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.proservice.getProduct(this.id).subscribe(data => {
      console.log(data)
      this.product1=data;
    },
    error => console.log(error));
  }
  updateproduct(){
    this.proservice.updateProducts(this.id,this.product1).subscribe(data =>{
       console.log(data);
      //  this.product1=new PRODUCT();
       this.gotolist();
    },
    error => console.log(error));
    
  }


  submitted=false;

onSubmit(){
  this.updateproduct();
  this.submitted=true;
}
gotolist(){
  this.router.navigate(['list'])
}

}
