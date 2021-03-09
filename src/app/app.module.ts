import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AuthModule } from './auth/auth.module';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { FiltersComponent } from './components/shopping-cart/filters/filters.component';
import { ProductItemsComponent } from './components/shopping-cart/product-items/product-items.component';
import { CartComponent } from './components/shopping-cart/cart/cart.component';
import { CartItemsComponent } from './components/shopping-cart/cart/cart-items/cart-items.component';
import { ProductItemComponent } from './components/shopping-cart/product-items/product-item/product-item.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {NgProgressModule} from 'ngx-progressbar';
import { AccountComponent } from './components/shared/nav/account/account.component';
import { SettingsComponent } from './components/shared/nav/settings/settings.component';
import { ProductItemDetailsComponent } from './components/shopping-cart/product-items/product-item/product-item-details/product-item-details.component'
import { AuthService } from './shared/services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ShoppingCartComponent,
    FiltersComponent,
    ProductItemsComponent,
    CartComponent,
    CartItemsComponent,
    ProductItemComponent,
    HomeComponent,
    AccountComponent,
    SettingsComponent,
    ProductItemDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    NgbModule,
    RouterModule,
    NgProgressModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
