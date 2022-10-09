import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { SidbarComponent } from './sidbar/sidbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductComponent } from './product/product.component';
import { FormsModule, NgForm } from '@angular/forms';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UsdtoEgPipe } from './usdto-eg.pipe';
import { ChileprouductComponent } from './chileprouduct/chileprouduct.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    SidbarComponent,
    ProductComponent,
    // FormsModule,
    LoginuserComponent,
    RegistrationComponent,
    UsdtoEgPipe,
    ChileprouductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
