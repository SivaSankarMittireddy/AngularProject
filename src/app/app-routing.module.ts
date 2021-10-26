import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RegisterComponent } from './register/register.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  {path: '', redirectTo: '/header', pathMatch: 'full'},
  {path:"create",component:CreateProductComponent},
  {path:"details/:id",component:ProductDetailsComponent},
  {path:"list",component:ProductListComponent},
  {path:"update/:id",component:UpdateProductComponent},
  {path:'home',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component: LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'base',component:BaseComponent},
  {path:'header',component:HeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
