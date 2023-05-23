import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DashboardComponent } from './containers/dashboard/dashboard.component'
import { HttpClientModule } from '@angular/common/http'

const routes: Routes = [
	{
		path: 'dashboard',
		component: DashboardComponent,
	},
	{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
]

@NgModule({
	imports: [HttpClientModule, RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AdminRoutingModule {}
