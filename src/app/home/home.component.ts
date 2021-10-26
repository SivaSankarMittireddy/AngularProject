import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router1:Router) { }

  ngOnInit(): void {
  }
  list1(){
    this.router1.navigate(['list'])
  }
  add(){
    this.router1.navigate(['create'])
  }
  base(){
    this.router1.navigate(['base'])
  }
}
