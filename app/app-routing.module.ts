import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { OpleidingenComponent } from "./opleidingen/opleidingen.component";
import { MyAppStoreComponent  } from "./my-app-store/my-app-store.component";
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
    data: {animation:'HomePage'}
  },
  {
    path: "contact",
    component: ContactComponent,
    data: {animation:'ContactPage'}
  },
  {
    path: "opleidingen",
    component: OpleidingenComponent,
    data: {animation:'OpleidingPage'}
  },
  {
    path: "my-app-store",
    component: MyAppStoreComponent,
    data: {animation:'StorePage'}
  },
  {
    path: "",
    component: HomeComponent,
    data: {animation:'HomePage'}
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
