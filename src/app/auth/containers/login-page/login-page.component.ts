import { Component } from '@angular/core'
import { EmailLoginForm } from '../../components/email-form/email-form.component'

@Component({
	selector: 'app-login-page',
	templateUrl: './login-page.component.html',
	styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
	loginWithGoogle() {
		console.log('Login with Google!')
	}
	loginWithFacebook() {
		console.log('Login with Facebook!')
	}
	loginWithTwitter() {
		console.log('Login with Twitter!')
	}
	loginWithGithub() {
		console.log('Login with Github!')
	}

	handleEmailLoginForm(data: EmailLoginForm) {
		console.log('Email login form data:', data)
		// Process the form data as needed
	}
}
