import { Component, OnInit } from '@angular/core'

import { Item } from '../../models/item.model'
import { ItemService } from '../../services/item.service'

@Component({
	selector: 'item-list',
	templateUrl: './item-list.component.html',
	styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit {
	items!: Item[]

	constructor(private itemService: ItemService) {}

	ngOnInit(): void {
		this.itemService
			.read()
			.subscribe((items: Item[]) => (this.items = items))
	}
	trackById(index: number, value: Item) {
		return value.id
	}
}
