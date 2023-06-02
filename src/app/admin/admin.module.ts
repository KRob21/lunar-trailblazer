import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AdminRoutingModule } from './admin-routing.module'
import { DashboardComponent } from './containers/dashboard/dashboard.component'

import { PayloadListComponent } from './containers/payload-list/payload-list.component'
import { PayloadSingleComponent } from './containers/payload-single/payload-single.component'
import { PayloadCardComponent } from './components/payload-card/payload-card.component'
import { PayloadFormComponent } from './components/payload-form/payload-form.component'
import { FormsModule } from '@angular/forms'

@NgModule({
	declarations: [
		DashboardComponent,
		PayloadListComponent,
		PayloadSingleComponent,
		PayloadCardComponent,
		PayloadFormComponent,
	],
	imports: [CommonModule, AdminRoutingModule, FormsModule],
})
export class AdminModule {}
