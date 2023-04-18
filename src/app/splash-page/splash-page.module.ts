import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SplashPageRoutingModule } from './splash-page-routing.module';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesComponent } from './components/services/services.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    ComingSoonComponent,
    LandingPageComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    SplashPageRoutingModule
  ]
})
export class SplashPageModule { }
