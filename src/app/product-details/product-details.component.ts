import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PRODUCT } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
id:number=0;
product:PRODUCT=new PRODUCT;
  constructor(private route:ActivatedRoute,private proservice:ProductService,private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.proservice.getProduct(this.id).subscribe(data => {
      console.log(data)
      this.product=data;
    },
    error => console.log(error));
  }
  list(){
    this.router.navigate(['list']);
  }

}
