import { TestBed } from '@angular/core/testing';

import { APIIngredientService } from './api-ingredient.service';

describe('APIIngredientService', () => {
  let service: APIIngredientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIIngredientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
