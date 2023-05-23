import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AdminRoutingModule } from './admin-routing.module'
import { DashboardComponent } from './containers/dashboard/dashboard.component'
import { ItemListComponent } from './containers/item-list/item-list.component'
import { ItemSingleComponent } from './containers/item-single/item-single.component';
import { ItemCardComponent } from './components/item-card/item-card.component'

@NgModule({
	declarations: [DashboardComponent, ItemListComponent, ItemSingleComponent, ItemCardComponent],
	imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
