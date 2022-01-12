import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PixButtonComponent } from './pix-button.component';

describe('PixButtonComponent', () => {
  let component: PixButtonComponent;
  let fixture: ComponentFixture<PixButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PixButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PixButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
