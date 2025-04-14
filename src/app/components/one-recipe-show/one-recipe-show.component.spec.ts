import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneRecipeShowComponent } from './one-recipe-show.component';

describe('OneRecipeShowComponent', () => {
  let component: OneRecipeShowComponent;
  let fixture: ComponentFixture<OneRecipeShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OneRecipeShowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneRecipeShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
