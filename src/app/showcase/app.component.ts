import { Component } from '@angular/core';
import { MenuItem } from '../components/sm-sidebar/sm-sidebar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'semantic-ui-angular13';

  menus: MenuItem[] = [
    {
      label: 'ButtonDemo',
      iconClass: 'home',
      routerLink: 'button',
      disabled: false,
    },
    {
      label: 'DividerDemo',
      iconClass: 'home',
      routerLink: 'divider',
      disabled: false,
    },
    {
      label: 'FlagDemo',
      iconClass: 'flag',
      routerLink: 'flag',
      disabled: false,
    },
  ];
}
