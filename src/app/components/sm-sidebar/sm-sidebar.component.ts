import { Component, Input, OnInit } from '@angular/core';

export interface MenuItem {
  label: string;
  iconClass: string;
  url?: string;
  routerLink?: string;
  disabled: boolean;
  command?: () => void;
}

@Component({
  selector: 'sm-sidebar',
  templateUrl: './sm-sidebar.component.html',
  styleUrls: ['./sm-sidebar.component.scss'],
})
export class SmSidebarComponent implements OnInit {
  @Input() model: MenuItem[];

  constructor() {}

  ngOnInit(): void {}

  menuItemClick(event: MouseEvent, item: MenuItem) {
    if (item.disabled) {
      event.preventDefault();
      return;
    }

    if (!item.url && !item.routerLink) {
      event.preventDefault();
    }

    if (item.command) {
      item.command();
    }
  }
}
