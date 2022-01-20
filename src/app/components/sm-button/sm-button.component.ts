import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'sm-button',
  templateUrl: './sm-button.component.html',
  styleUrls: ['./sm-button.component.scss'],
})
export class SmButtonComponent implements OnInit {
  @Input() type: string = 'button';

  @Input() iconPos: 'left' | 'right' = 'left';

  @Input() icon: string;

  @Input() label: string;

  @Input() class: string;

  @Input() color: string;

  @Input() loading: boolean = false;

  @Output() onClick: EventEmitter<any> = new EventEmitter();

  @Output() onFocus: EventEmitter<any> = new EventEmitter();

  @Output() onBlur: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
