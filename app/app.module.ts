import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { OpleidingenComponent } from "./opleidingen/opleidingen.component";
import { ImageGalleryComponent } from "./image-gallery/image-gallery.component";
import { MyAppStoreComponent } from "./my-app-store/my-app-store.component";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SafePipe} from './SafePipe'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SafePipe,
    HomeComponent,
    ContactComponent,
    OpleidingenComponent,
    ImageGalleryComponent,
    MyAppStoreComponent
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule

  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})

export class AppModule {}
