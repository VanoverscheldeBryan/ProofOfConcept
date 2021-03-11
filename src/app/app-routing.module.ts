import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { AccountComponent } from './components/shared/nav/account/account.component';
import { SettingsComponent } from './components/shared/nav/settings/settings.component';
import { ProductItemDetailsComponent } from './components/shopping-cart/product-items/product-item/product-item-details/product-item-details.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

const routes: Routes = [
  // {path: '', component: LoginComponent},
  {path: '', component: ShoppingCartComponent, canActivate : [AuthGuard]},
  {path: 'account', component: AccountComponent, canActivate : [AuthGuard]},
  {path: 'settings', component: SettingsComponent, canActivate : [AuthGuard]},
  {path: 'product/:id', component: ProductItemDetailsComponent, canActivate : [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 