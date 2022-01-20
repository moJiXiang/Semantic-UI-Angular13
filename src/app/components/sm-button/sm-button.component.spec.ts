import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmButtonComponent } from './sm-button.component';

describe('SmButtonComponent', () => {
  let component: SmButtonComponent;
  let fixture: ComponentFixture<SmButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
