import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagdemoComponent } from './flagdemo.component';

describe('FlagdemoComponent', () => {
  let component: FlagdemoComponent;
  let fixture: ComponentFixture<FlagdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlagdemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlagdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
