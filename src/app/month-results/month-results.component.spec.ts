import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthResultsComponent } from './month-results.component';

describe('MonthResultsComponent', () => {
  let component: MonthResultsComponent;
  let fixture: ComponentFixture<MonthResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
