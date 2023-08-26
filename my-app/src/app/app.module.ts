import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './Component/header/header.component';
import { SidbarComponent } from './Component/sidbar/sidbar.component';
import { HomeComponent } from './Component/home/home.component';
import { ProductListComponent } from './Component/Order/product-list/product-list.component';
import { LightBoxDirective } from './Directive/light-box.directive';
import { USDtoEGPPipe } from './Pipes/usdto-egp.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidbarComponent,
    HomeComponent,
    ProductListComponent,
    LightBoxDirective,
    USDtoEGPPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
