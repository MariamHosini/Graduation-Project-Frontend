import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesShowComponent } from './recipes-show.component';

describe('RecipesShowComponent', () => {
  let component: RecipesShowComponent;
  let fixture: ComponentFixture<RecipesShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecipesShowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipesShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
