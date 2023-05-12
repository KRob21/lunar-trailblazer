import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import {
	Auth,
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	User,
} from 'firebase/auth'
import { AuthStore } from '../../store/auth/auth.store'
import { DialogService } from 'src/app/shared/services/dialog.service'
@Injectable({
	providedIn: 'root',
})
export class AuthService {
	private auth

	constructor(
		private router: Router,
		private authStore: AuthStore,
		private dialogService: DialogService,
	) {
		this.auth = getAuth()

		this.auth.onAuthStateChanged((user: User | null) => {
			this.authStore.updateUser(user)
		})
	}

	get authState$() {
		return this.authStore.authState$
	}

	async loginWithEmailAndPassword(
		email: string,
		password: string,
	): Promise<void> {
		try {
			const userCredential = await signInWithEmailAndPassword(
				this.auth,
				email,
				password,
			)
			this.authStore.updateUser(userCredential.user)
			this.router.navigate(['/admin/dashboard'])
		} catch (error) {
			alert('login error')
			console.error('Error during login:', error)
			throw error
		}
	}

	async signupWithEmailAndPassword(
		email: string,
		password: string,
	): Promise<void> {
		try {
			const userCredential = await createUserWithEmailAndPassword(
				this.auth,
				email,
				password,
			)
			this.authStore.updateUser(userCredential.user)
			alert('successful signup')
			this.router.navigate(['/admin/dashboard'])
		} catch (error) {
			console.error('Error during signup:', error)
			throw error
		}
	}

	async signOut(): Promise<void> {
		try {
			await signOut(this.auth)
			this.authStore.updateUser(null) // Update the AuthStore on logout
			this.router.navigate(['auth/login'])
		} catch (error) {
			console.error('Error during sign out:', error)
			throw error
		}
	}
}
