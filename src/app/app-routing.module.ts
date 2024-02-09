import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {NavComponent} from "./nav/nav.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {OrderComponent} from "./order/order.component";
import {UserComponent} from "./user/user.component";
import { BookComponent } from "./book/book.component";
import { AdduserComponent} from "./adduser/adduser.component";
import { AddbulkComponent} from "./addbulk/addbulk.component";
import { LoginComponent} from "./login/login.component";
import { SignupComponent} from "./signup/signup.component";


const routes: Routes = [
  {path: '',redirectTo: '/login', pathMatch: 'full'},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path: 'home', component: HomeComponent},
  {path: 'nav', component: NavComponent},
  {path: 'Dashboard', component: DashboardComponent},
  {path: 'Dashboard/Orders', component: OrderComponent},
  {path: 'Dashboard/Users', component: UserComponent},
  {path: 'Dashboard/Books', component: BookComponent},
  {path: 'Dashboard/Add New', component: AdduserComponent},
  {path: 'Dashboard/Add Bulk', component: AddbulkComponent},
  {path: 'Logout',component:LoginComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
