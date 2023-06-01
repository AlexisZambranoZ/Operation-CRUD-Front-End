import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUpdateCustomerComponent } from './create-update-customer/create-update-customer.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';

const routes: Routes = [
  { path: '', component: CustomersListComponent },  // Ruta de la página de inicio
  { path: 'Create', component: CreateUpdateCustomerComponent },  // Ruta de la página "Acerca de"
  { path: 'Read', component: CustomersListComponent },  // Ruta de la página "Acerca de"
  { path: 'Update', component: UpdateCustomerComponent },  // Ruta de la página "Acerca de"
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
