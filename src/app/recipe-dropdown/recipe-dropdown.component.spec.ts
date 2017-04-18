import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDropdownComponent } from './recipe-dropdown.component';

describe('RecipeDropdownComponent', () => {
  let component: RecipeDropdownComponent;
  let fixture: ComponentFixture<RecipeDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
