import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component'
import { LandingPageComponent } from './components/landing-page/landing-page.component'
import { AboutComponent } from './components/about/about.component'
import { ContactComponent } from './components/contact/contact.component'
import { ServicesComponent } from './components/services/services.component'
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'

const routes: Routes = [
	// { path: '', component: ComingSoonComponent },
	{ path: '', component: LandingPageComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'contact', component: ContactComponent },
	{ path: 'services', component: ServicesComponent },
	{ path: '404', component: PageNotFoundComponent },
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class SplashPageRoutingModule {}
