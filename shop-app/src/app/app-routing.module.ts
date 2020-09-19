import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductEntryComponent } from './product-entry/product-entry.component';
import { ProductTypeEntryComponent } from './product-type-entry/product-type-entry.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductTypeListComponent } from './product-type-list/product-type-list.component';
import { SalesMasterDetailsComponent } from './sales-master-details/sales-master-details.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerEntryComponent } from './customer-entry/customer-entry.component';

const routes: Routes = [
  { path: 'createProduct', component: ProductEntryComponent },
  { path: 'createProductType', component: ProductTypeEntryComponent },
  { path: 'Sales', component: SalesMasterDetailsComponent },
  { path: 'customerList', component: CustomerListComponent },
  { path: 'edit/:id', component: CustomerEntryComponent },
  { path: 'productedit/:id', component: ProductEntryComponent },
  { path: 'typeEdit/:id', component: ProductTypeEntryComponent },
  { path: 'productList', component: ProductListComponent },
  { path: 'productTypeList', component: ProductTypeListComponent },


  { path: '', redirectTo: '/productList', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }