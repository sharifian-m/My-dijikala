import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsModule } from './layout/layouts.module';
import { HomeComponent } from './pages/home/home.component';
import { SliderComponent } from './pages/home/index/slider/slider.component';
import { IndexComponent } from './pages/home/index/index.component';
import { GifBannerComponent } from './pages/home/index/gif-banner/gif-banner.component';
import { AmazingOfferComponent } from './pages/home/index/amazing-offer/amazing-offer.component';
import { FourAdvertiseComponent } from './pages/home/index/four-advertise/four-advertise.component';

import { TwoAdvertiseComponent } from './pages/home/index/two-advertise/two-advertise.component';
import { InstantSuggestionsComponent } from './pages/home/index/instant-suggestions/instant-suggestions.component';
import { MoreCategotyComponent } from './pages/home/index/more-categoty/more-categoty.component';
import { PersonalizationComponent } from './pages/home/index/personalization/personalization.component';
import { BrandsComponent } from './pages/home/index/brands/brands.component';
import { AdBannerComponent } from './pages/home/index/ad-banner/ad-banner.component';
import { BaseVisitsComponent } from './pages/home/index/base-visits/base-visits.component';
import { AccountModule } from './account/account.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { AuthInterceptor } from './account/auth.interceptor';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SliderComponent,
    IndexComponent,
    GifBannerComponent,
    AmazingOfferComponent,
    FourAdvertiseComponent,
    TwoAdvertiseComponent,
    InstantSuggestionsComponent,
    MoreCategotyComponent,
    PersonalizationComponent,
    BrandsComponent,
    AdBannerComponent,
    BaseVisitsComponent
  
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    LayoutsModule,
    AccountModule,
    SweetAlert2Module.forRoot()
  ],
  providers:
  [CookieService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
