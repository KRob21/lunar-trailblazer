import { Component, OnInit } from '@angular/core'
import { EmailLoginForm } from '../../components/email-form/email-form.component'
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router'
import { DialogService } from 'src/app/shared/services/dialog.service'

@Component({
	selector: 'app-login-page',
	templateUrl: './login-page.component.html',
	styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
	isLoggedIn: boolean | undefined
	constructor(
		private authService: AuthService,
		private router: Router,
		private dialogService: DialogService,
	) {
		this.authService.authState$.subscribe(authState => {
			this.isLoggedIn = authState.isLoggedIn
		})
	}
	ngOnInit(): void {
		if (this.isLoggedIn) {
			console.log('logged in redirecting to admin')
			this.router.navigate(['admin'])
		}
		if (!this.isLoggedIn) {
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
				this.dialogService.showDialog(
					'success',
					'Success',
					'you have succesfully logged in',
				)
			} catch (error) {
				this.dialogService.showDialog(
					'error',
					'Not Logged IN',
					'you must be logged in',
				)
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
