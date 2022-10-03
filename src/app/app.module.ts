import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { CompareCardsComponent } from './compare-cards/compare-cards.component';
import { SupportComponent } from './support/support.component';
import { BlogComponent } from './blog/blog.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ToastComponent } from './toast/toast.component';
import { LoadingComponent } from './loading/loading.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FeaturesComponent,
    CompareCardsComponent,
    SupportComponent,
    BlogComponent,
    RegisterComponent,
    LoginComponent,
    ToastComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
