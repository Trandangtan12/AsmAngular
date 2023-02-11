import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductService } from './product.service';
import { LayoutAdminComponent } from './backend/layout-admin/layout-admin.component';
import { HeaderAdminComponent } from './backend/component/header-admin/header-admin.component';
import { DashbroadComponent } from './backend/component/dashbroad/dashbroad.component';
import { SidebarAdminComponent } from './backend/component/sidebar-admin/sidebar-admin.component';
import { ProductComponent } from './backend/component/product/product/product.component';
import { ProductAddComponent } from './backend/component/product/product-add/product-add.component';
import { ProductEditComponent } from './backend/component/product/product-edit/product-edit.component';
import { LayoutWebsiteComponent } from './frontend/layout-website/layout-website.component';
import { HeaderWebsiteComponent } from './frontend/component/header-website/header-website.component';
import { NavWebsiteComponent } from './frontend/component/nav-website/nav-website.component';
import { HomeComponent } from './frontend/component/home/home.component';
import { BannerWebsiteComponent } from './frontend/component/banner-website/banner-website.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import firebase from 'firebase';
import { environment } from 'src/environments/environment';
import { DetailPageComponent } from './frontend/component/detail-page/detail-page.component';
import { HttpClientModule } from '@angular/common/http';
firebase.initializeApp(environment.config);
@NgModule({
  declarations: [
    AppComponent,
    LayoutAdminComponent,
    HeaderAdminComponent,
    DashbroadComponent,
    SidebarAdminComponent,
    ProductComponent,
    ProductAddComponent,
    ProductEditComponent,
    LayoutWebsiteComponent,
    HeaderWebsiteComponent,
    NavWebsiteComponent,
    HomeComponent,
    BannerWebsiteComponent,
    DetailPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
