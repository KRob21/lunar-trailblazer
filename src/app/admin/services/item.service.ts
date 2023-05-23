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
			icon: 'just-chocolate',
			price: 120,
			promo: 'limited',
			description: 'For the pure chocoholic.',
		},
		{
			id: '3u98Kl',
			name: 'Glazed Fudge',
			icon: 'glazed-fudge',
			price: 129,
			promo: 'new',
			description: 'Sticky perfection.',
		},
		{
			id: 'ae098s',
			name: 'Caramel Swirl',
			icon: 'caramel-swirl',
			price: 149,
			promo: 'limited',
			description: 'Chocolate drizzled with caramel.',
		},
		{
			id: '8amkZ9',
			name: 'Sour Supreme',
			icon: 'sour-supreme',
			price: 139,
			promo: 'new',
			description: 'For the sour advocate.',
		},
		{
			id: 'l3M0nz',
			name: 'Zesty Lemon',
			icon: 'zesty-lemon',
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
