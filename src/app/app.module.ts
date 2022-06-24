import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { YachtComponent } from './yacht/yacht.component';
import { OffersComponent } from './offers/offers.component';
import { EditYachtComponent } from './edit-yacht/edit-yacht.component';
import { FooterComponent } from './footer/footer.component';
import { YachtFormComponent } from './yacht-form/yacht-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SwitchGuestAdminComponent } from './header/switch-guest-admin/switch-guest-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    HomePageComponent,
    YachtComponent,
    OffersComponent,
    EditYachtComponent,
    FooterComponent,
    YachtFormComponent,
    SwitchGuestAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
