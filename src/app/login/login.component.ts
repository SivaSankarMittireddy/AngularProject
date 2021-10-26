import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 ngOnInit(): void {
  
 }
//  formdata:any;
//  emailid:any;
//  password:any;

  

//   ngOnInit(): void {
//     this.formdata=new FormGroup({
//       emailid:new FormControl("",Validators.compose([
//         Validators.required,
//         Validators.pattern("[^@]*@[^@]*")
//       ])),
//       password:new FormControl("")
//     })
//   }
// onClickSubmit(data){
//   this.emailid=data.emailid;
//   this.password=data.password;

// }




Email:any="";
Password:any="";
constructor(private router:Router){

}
display(loginForm:any){
  if(this.Email=="siva@gmail.com" && this.Password=="254"){
    alert("Successfully Log!n...!")
    this.router.navigate(['/base']);
  }
  else{
    alert("wrong credentials...?")
    this.router.navigate(['/register']);
  }
  console.log(loginForm.pass)
}
}
