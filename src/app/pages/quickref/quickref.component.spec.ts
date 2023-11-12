import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickrefComponent } from './quickref.component';

describe('QuickrefComponent', () => {
  let component: QuickrefComponent;
  let fixture: ComponentFixture<QuickrefComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuickrefComponent]
    });
    fixture = TestBed.createComponent(QuickrefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
