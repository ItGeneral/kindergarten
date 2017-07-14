import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBackSystemComponent } from './app-back-system.component';

describe('AppBackSystemComponent', () => {
  let component: AppBackSystemComponent;
  let fixture: ComponentFixture<AppBackSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBackSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBackSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
