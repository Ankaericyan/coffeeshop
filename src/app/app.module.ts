import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel/carousel.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderComponent } from './layouts/header/header.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { MenuPricingComponent } from './pages/menu-pricing/menu-pricing.component';
import { ClientsFeedbackComponent } from './pages/clients-feedback/clients-feedback.component';
import { BookingComponent } from './pages/booking/booking.component';
import { ServicesComponent } from './pages/services/services.component';



@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    FooterComponent,
    HeaderComponent,
    AboutUsComponent,
    MenuPricingComponent,
    ClientsFeedbackComponent,
    BookingComponent,
    ServicesComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
