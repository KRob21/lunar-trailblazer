import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DashboardComponent } from './containers/dashboard/dashboard.component'
import { HttpClientModule } from '@angular/common/http'
import { PayloadSingleComponent } from './containers/payload-single/payload-single.component'

const routes: Routes = [
	{
		path: 'dashboard',
		component: DashboardComponent,
	},
	{
		path: 'dashboard/new',
		component: PayloadSingleComponent,
		data: { isEdit: false },
	},
	{
		path: 'dashboard/:id',
		component: PayloadSingleComponent,
		data: { isEdit: true },
	},
	{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
]

@NgModule({
	imports: [HttpClientModule, RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AdminRoutingModule {}
