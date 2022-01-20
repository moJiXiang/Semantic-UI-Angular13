import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmDividerComponent } from './sm-divider.component';

describe('SmDividerComponent', () => {
  let component: SmDividerComponent;
  let fixture: ComponentFixture<SmDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmDividerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
