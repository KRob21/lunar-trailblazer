import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DashboardComponent } from './containers/dashboard/dashboard.component'
import { HttpClientModule } from '@angular/common/http'
import { ItemSingleComponent } from './containers/item-single/item-single.component'

const routes: Routes = [
	{
		path: 'dashboard',
		component: DashboardComponent,
	},
	{
		path: 'items/new',
		component: ItemSingleComponent,
		data: { isEdit: false },
	},
	{
		path: 'items/:id',
		component: ItemSingleComponent,
		data: { isEdit: true },
	},
	{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
]

@NgModule({
	imports: [HttpClientModule, RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AdminRoutingModule {}
