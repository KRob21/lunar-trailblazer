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
@Injectable({
	providedIn: 'root',
})
export class AuthService {
	private auth
	private authStore: AuthStore

	constructor(private router: Router) {
		this.auth = getAuth()
		this.authStore = new AuthStore()

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
			await signInWithEmailAndPassword(this.auth, email, password)
			alert('successful login')
			this.router.navigate(['/admin/dashboard'])
		} catch (error) {
			console.log('error', error)
			console.error('Error during login:', error)
			throw error
		}
	}

	async signupWithEmailAndPassword(
		email: string,
		password: string,
	): Promise<void> {
		try {
			await createUserWithEmailAndPassword(this.auth, email, password)
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
		} catch (error) {
			console.error('Error during sign out:', error)
			throw error
		}
	}
}
