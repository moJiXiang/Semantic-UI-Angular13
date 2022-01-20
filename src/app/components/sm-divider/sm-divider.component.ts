import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sm-divider',
  templateUrl: './sm-divider.component.html',
  styleUrls: ['./sm-divider.component.scss'],
})
export class SmDividerComponent implements OnInit {
  @Input() direction: 'horizontal' | 'vertical' = 'horizontal';

  @Input() iconClass: string;

  @Input() label: string;

  constructor() {}

  ngOnInit(): void {}
}
