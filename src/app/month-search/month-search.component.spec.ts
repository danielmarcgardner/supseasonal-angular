import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthSearchComponent } from './month-search.component';

describe('MonthSearchComponent', () => {
  let component: MonthSearchComponent;
  let fixture: ComponentFixture<MonthSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
