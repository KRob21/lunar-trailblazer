import { Component, OnInit } from '@angular/core'
import { EmailLoginForm } from '../../components/email-form/email-form.component'
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router'

@Component({
	selector: 'app-login-page',
	templateUrl: './login-page.component.html',
	styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
	isLoggedIn: boolean | undefined
	constructor(private authService: AuthService, private router: Router) {
		this.authService.authState$.subscribe(authState => {
			this.isLoggedIn = authState.isLoggedIn
		})
	}
	ngOnInit(): void {
		if (this.isLoggedIn) {
			alert('logged in redirecting to admin')
			this.router.navigate(['admin'])
		}
		if (!this.isLoggedIn) {
			alert('not logged in')
		}
	}
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

	async handleFormSubmit(event: { type: string; data: EmailLoginForm }) {
		if (event.type === 'login') {
			try {
				await this.authService.loginWithEmailAndPassword(
					event.data.email,
					event.data.password,
				)
				console.log('Email login success')
			} catch (error) {
				console.error('Email login error:', error)
			}
		} else if (event.type === 'signup') {
			try {
				await this.authService.signupWithEmailAndPassword(
					event.data.email,
					event.data.password,
				)
				console.log('Email signup success')
			} catch (error) {
				console.error('Email signup error:', error)
			}
		}
	}
}
