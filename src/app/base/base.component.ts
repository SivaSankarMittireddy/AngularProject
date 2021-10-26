import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  constructor(private router:Router,private router1:Router) { }

  ngOnInit(): void {
  }
  home(){
    this.router.navigate(['home'])
  }
  list(){
    this.router.navigate(['list'])
  }
  add(){
    this.router.navigate(['create'])
  }
 header(){
   this.router.navigate([''])
 }
}
