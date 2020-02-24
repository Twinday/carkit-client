import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './_components/page-not-found/page-not-found.component';
import { AdminComponent } from './admin/admin.component';
import { MainPageComponent } from './main-page/main-page.component';
import { DetailsComponent } from './admin/details/details.component';


const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'admin', component: AdminComponent,
    children: [
      { path: 'details', component: DetailsComponent },
    ]},
  { path: '**', component: PageNotFoundComponent }
  /*{ path: '', component: SigninpageComponent},
  { path: 'home',
    component: HomepageComponent,
    canActivate: [PermitGuard], data: {expectedRole: ['admin', 'cook', 'waiter', 'provisor']},
    children: [

      { path: 'registration', component: SignupComponent, canActivate: [PermitGuard], data: {expectedRole: ['admin']} },
      { path: 'add-product', component: AddIngFormComponent, canActivate: [PermitGuard], data: {expectedRole: ['provisor']} },
      { path: 'display-product', component: IngTableComponent,
      canActivate: [PermitGuard], data: {expectedRole: ['admin', 'cook', 'provisor']} },
      { path: 'list-buying', component: NeedIngTableComponent,
      canActivate: [PermitGuard], data: {expectedRole: ['admin', 'cook', 'provisor']} },
      { path: 'current-orders', component: CookFormComponent, canActivate: [PermitGuard], data: {expectedRole: ['cook']} },
      { path: 'new-order', component: AddOrderComponent, canActivate: [PermitGuard], data: {expectedRole: ['waiter']} },
      { path: 'released-dishes', component: UsedDishesComponent, canActivate: [PermitGuard], data: {expectedRole: ['admin']} },
      { path: 'menu', component: MenuComponent, canActivate: [PermitGuard], data: {expectedRole: ['admin']} },
      { path: 'revenue', component: RevenueComponent, canActivate: [PermitGuard], data: {expectedRole: ['admin']} },
      { path: 'buy-ingredient', component: AddIngredientAvailableComponent,
      canActivate: [PermitGuard], data: {expectedRole: ['provisor']} },
      { path: 'message', component: WaiterNotificationsComponent, canActivate: [PermitGuard], data: {expectedRole: ['waiter']} }
    ]},
  { path: '**', component: PagenotfoundComponent},*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

