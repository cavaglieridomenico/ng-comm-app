import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditYachtComponent } from './edit-yacht/edit-yacht.component';
import { HomePageComponent } from './home-page/home-page.component';
import { OffersComponent } from './offers/offers.component';
import { UserAdminGuardService } from './shared/user-admin-guard.service';
import { YachtFormComponent } from './yacht-form/yacht-form.component';
import { YachtComponent } from './yacht/yacht.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'yachts',
    component: YachtComponent,
  },
  {
    path: 'offers',
    component: OffersComponent,
  },
  {
    path: 'edit',
    canActivate: [UserAdminGuardService],
    component: EditYachtComponent,
    children: [{ path: ':id', component: YachtFormComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
