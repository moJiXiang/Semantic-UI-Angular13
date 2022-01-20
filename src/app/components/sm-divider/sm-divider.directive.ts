import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import { DomHandler } from 'semantic/dom';

@Directive({
  selector: '[smDivider]',
})
export class SmDividerDirective implements AfterViewInit {
  @Input() direction: 'horizontal' | 'vertical' = 'horizontal';

  @Input() icon: string;

  @Input() label: string;

  constructor(public el: ElementRef) {}

  ngAfterViewInit(): void {
    DomHandler.addMultipleClasses(this.el.nativeElement, this.getStyleClass());

    if (this.icon) {
      this.createIconEl();
    }

    if (this.label) {
      this.el.nativeElement.appendChild(document.createTextNode(this.label));
    }
  }

  getStyleClass(): string {
    let styleClass = 'ui';

    styleClass += ' ' + this.direction;

    styleClass += ' divider header';

    return styleClass;
  }

  createIconEl() {
    let iconElement = document.createElement('i');
    iconElement.className = this.icon + ' icon';

    this.el.nativeElement.appendChild(iconElement);
  }
}
