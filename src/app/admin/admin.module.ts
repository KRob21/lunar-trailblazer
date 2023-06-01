import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AdminRoutingModule } from './admin-routing.module'
import { DashboardComponent } from './containers/dashboard/dashboard.component'
import { ItemListComponent } from './containers/item-list/item-list.component'
import { ItemSingleComponent } from './containers/item-single/item-single.component';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { PayloadListComponent } from './containers/payload-list/payload-list.component';
import { PayloadSingleComponent } from './containers/payload-single/payload-single.component';
import { PayloadCardComponent } from './components/payload-card/payload-card.component';
import { PayloadFormComponent } from './components/payload-form/payload-form.component'

@NgModule({
	declarations: [DashboardComponent, ItemListComponent, ItemSingleComponent, ItemCardComponent, PayloadListComponent, PayloadSingleComponent, PayloadCardComponent, PayloadFormComponent],
	imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
