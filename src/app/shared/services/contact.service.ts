import { Injectable } from '@angular/core'
import { Router } from '@angular/router'

import { getFirestore, doc, setDoc, collection } from 'firebase/firestore'

@Injectable({
	providedIn: 'root',
})
export class ContactsService {
	db = getFirestore()
	constructor(private router: Router) {}

	async createContacts(data: {
		first_name: any
		last_name: any
		email: any
	}) {
		// Use a try-catch block to handle potential errors
		try {
			// Generate a new document within the 'contactss' collection
			const docRef = doc(collection(this.db, 'subscribers'))

			// Use setDoc() to write data to the document
			await setDoc(docRef, {
				first_name: data.first_name,
				last_name: data.last_name,
				email: data.email,
			})
		} catch (error) {
			console.error('Error adding document: ', error)
		}
	}
}
