import { Component, Input } from '@angular/core'
import { Item } from '../../models/item.model'

@Component({
	selector: 'item-card',
	templateUrl: './item-card.component.html',
	styleUrls: ['./item-card.component.scss'],
})
export class ItemCardComponent {
	@Input() item!: Item
	constructor() {}
}
