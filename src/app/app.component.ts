import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	isCollapsed: boolean = true;

	onCollapseButtonClick() {
		this.isCollapsed = !this.isCollapsed;
		console.log(this.isCollapsed);
	}
}
