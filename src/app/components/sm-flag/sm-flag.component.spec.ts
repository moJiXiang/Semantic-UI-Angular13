import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmFlagComponent } from './sm-flag.component';

describe('SmFlagComponent', () => {
  let component: SmFlagComponent;
  let fixture: ComponentFixture<SmFlagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmFlagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
