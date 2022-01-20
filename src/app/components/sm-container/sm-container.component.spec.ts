import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmContainerComponent } from './sm-container.component';

describe('SmContainerComponent', () => {
  let component: SmContainerComponent;
  let fixture: ComponentFixture<SmContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
