import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { LoginPageComponent } from './containers/login-page/login-page.component'
import { ForgotPasswordPageComponent } from './containers/forgot-password-page/forgot-password-page.component'

const routes: Routes = [
	{
		path: '', // Default route to the login page
		children: [
			{
				path: 'login', // Redirect to the login page
				component: LoginPageComponent,
			},
			{
				path: 'forgot-password', // Redirect to the login page
				component: ForgotPasswordPageComponent,
			},
			// Add other child routes here as needed
		],
	},
	{ path: '', redirectTo: 'login', pathMatch: 'full' },
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AuthRoutingModule {}
