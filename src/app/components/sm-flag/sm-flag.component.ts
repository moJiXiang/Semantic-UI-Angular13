import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sm-flag',
  templateUrl: './sm-flag.component.html',
  styleUrls: ['./sm-flag.component.scss'],
})
export class SmFlagComponent implements OnInit {
  @Input() flag: string;

  constructor() {}

  ngOnInit(): void {}
}
