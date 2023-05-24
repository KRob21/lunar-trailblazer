import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
//rxjs
import {
	tap,
	of,
	map,
	catchError,
	throwError,
	retryWhen,
	delay,
	take,
} from 'rxjs'
//custom
import { Item } from '../models/item.model'

@Injectable({
	providedIn: 'root',
})
export class ItemService {
	private items: Item[] = [
		{
			id: 'y8z0As',
			name: 'Just Chocolate',
			icon: 'cup',
			price: 120,
			promo: 'limited',
			description: 'For the pure chocoholic.',
		},
		{
			id: '3u98Kl',
			name: 'Glazed Fudge',
			icon: 'coffee',
			price: 129,
			promo: 'new',
			description: 'Sticky perfection.',
		},
		{
			id: 'ae098s',
			name: 'Caramel Swirl',
			icon: 'coffee',
			price: 149,
			promo: 'limited',
			description: 'Chocolate drizzled with caramel.',
		},
		{
			id: '8amkZ9',
			name: 'Sour Supreme',
			icon: 'cup',
			price: 139,
			promo: 'new',
			description: 'For the sour advocate.',
		},
		{
			id: 'l3M0nz',
			name: 'Zesty Lemon',
			icon: 'coffee-mug',
			price: 129,
			description: 'Delicious lucious lemon.',
		},
	]

	constructor(private http: HttpClient) {}

	read() {
		if (this.items.length) {
			return of(this.items)
		}
		return this.http.get<Item[]>(`api/items`).pipe(
			tap(items => {
				this.items = items
			}),
			// retryWhen((errors) => {
			//     return errors.pipe(delay(5000), take(2));
			// })
			// catchError(this.handleError)
		)
	}
	readOne(id: string | null) {
		return this.read().pipe(
			map(items => {
				const item = items.find((item: Item) => item.id === id)

				if (item) {
					return item
				}

				return { name: '', icon: '', price: 0, description: '' }
			}),
			catchError(this.handleError),
		)
	}

	private handleError(err: HttpErrorResponse) {
		if (err.error instanceof ErrorEvent) {
			// client-side
			console.warn('Client', err.message)
		} else {
			// server-side
			console.warn('Server', err.status)
		}
		console.warn(err)
		return throwError(() => new Error(err.message))
	}
}
