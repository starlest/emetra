import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

export const appRoutes: Routes = [
	{
		path: '',
		redirectTo: 'contact',
		pathMatch: 'full'
	},
	{
		path: 'home',
		component: HomeComponent
	},
	{
		path: 'contact',
		component: ContactComponent
	},
];

export const AppRouting = RouterModule.forRoot(appRoutes);
