import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbroadComponent } from './backend/component/dashbroad/dashbroad.component';
import { ProductAddComponent } from './backend/component/product/product-add/product-add.component';
import { ProductEditComponent } from './backend/component/product/product-edit/product-edit.component';
import { ProductComponent } from './backend/component/product/product/product.component';
import { LayoutAdminComponent } from './backend/layout-admin/layout-admin.component';
import { DetailPageComponent } from './frontend/component/detail-page/detail-page.component';
import { HomeComponent } from './frontend/component/home/home.component';
import { LayoutWebsiteComponent } from './frontend/layout-website/layout-website.component';

const routes: Routes = [
  {
    path: 'admin',
    component: LayoutAdminComponent,
    children: [
      { path: '', redirectTo: 'dashbroad', pathMatch: 'full' },
      { path: 'dashbroad', component: DashbroadComponent },
      { path: 'product', component: ProductComponent },
      { path: 'product-add', component: ProductAddComponent },
      { path: 'product-edit/:id', component: ProductEditComponent },
    ],
  },
  {
    path: '',
    component: LayoutWebsiteComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'product/:id;', component: DetailPageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
