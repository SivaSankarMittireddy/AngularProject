import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor(private add:ProductService,private router:Router) { }

  ngOnInit(): void {
  }
  addproduct(data:any){
      this.add.addproducts(data).subscribe();
      console.log(data);
  }
home(){
  this.router.navigate(['home'])
}
list(){
  this.router.navigate(['list'])
}
home1(){
  this.router.navigate(['base'])
}

}
