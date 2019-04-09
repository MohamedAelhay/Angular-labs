import { TestBed } from '@angular/core/testing';

import { LecOneService } from './lec-one.service';

describe('LecOneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LecOneService = TestBed.get(LecOneService);
    expect(service).toBeTruthy();
  });
});
