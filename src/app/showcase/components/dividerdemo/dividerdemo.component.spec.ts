import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DividerdemoComponent } from './dividerdemo.component';

describe('DividerdemoComponent', () => {
  let component: DividerdemoComponent;
  let fixture: ComponentFixture<DividerdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DividerdemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DividerdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
