import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { BookstoreComponent } from './bookstore/bookstore.component';
import { FilterComponent } from './bookstore/filter/filter.component';
import { ProductComponent } from './bookstore/product-list/product/product.component';
import { ProductListComponent } from './bookstore/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    BookstoreComponent,
    FilterComponent,
    ProductComponent,
    ProductListComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
