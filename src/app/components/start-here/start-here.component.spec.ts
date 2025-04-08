import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartHereComponent } from './start-here.component';

describe('StartHereComponent', () => {
  let component: StartHereComponent;
  let fixture: ComponentFixture<StartHereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StartHereComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartHereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
