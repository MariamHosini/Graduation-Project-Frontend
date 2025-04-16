import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDataEditingComponent } from './profile-data-editing.component';

describe('ProfileDataEditingComponent', () => {
  let component: ProfileDataEditingComponent;
  let fixture: ComponentFixture<ProfileDataEditingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileDataEditingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileDataEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
