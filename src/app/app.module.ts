import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from  './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

import { ButtonsModule, CollapseModule } from 'ng2-bootstrap';

import { AppRouting } from './app.routing';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		ContactComponent,
		NavbarComponent
	],
	imports: [
		AppRouting,
		BrowserModule,
		FormsModule,
		HttpModule,

		/**
		 * ng2-bootsrap
		 */
		ButtonsModule.forRoot(),
		CollapseModule.forRoot()
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
