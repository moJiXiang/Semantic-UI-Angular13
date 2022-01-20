import { Component } from '@angular/core';
import { MenuItem } from '../components/sm-sidebar/sm-sidebar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'pixowor-ui';

  menus: MenuItem[] = [
    {
      label: 'ButtonDemo',
      iconClass: 'home',
      routerLink: 'button',
      disabled: false,
    },
  ];
}
