import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

@NgModule({
  declarations: [AppComponent, NavbarComponent, HeaderComponent, HomePageComponent, YachtComponent, OffersComponent, EditYachtComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
