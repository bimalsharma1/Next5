import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Next5Component } from './next5.component';

describe('Next5Component', () => {
  let component: Next5Component;
  let fixture: ComponentFixture<Next5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Next5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Next5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
