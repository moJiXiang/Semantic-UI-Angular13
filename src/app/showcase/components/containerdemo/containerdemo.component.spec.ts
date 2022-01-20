import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerdemoComponent } from './containerdemo.component';

describe('ContainerdemoComponent', () => {
  let component: ContainerdemoComponent;
  let fixture: ComponentFixture<ContainerdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerdemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
