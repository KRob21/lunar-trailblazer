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

	handleFormSubmit(event: { type: string; data: EmailLoginForm }) {
		if (event.type === 'login') {
			console.log('Email login form data:', event.data)
		} else if (event.type === 'signup') {
			console.log('Email signup form data:', event.data)
		}
	}
}
