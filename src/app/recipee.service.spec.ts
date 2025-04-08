import { TestBed } from '@angular/core/testing';

import { RecipeeService } from './recipee.service';

describe('RecipeeService', () => {
  let service: RecipeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
