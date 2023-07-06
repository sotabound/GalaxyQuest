import { TestBed } from '@angular/core/testing';

import { GalaxyDetailGuard } from './galaxy-detail.guard';

describe('GalaxyDetailGuard', () => {
  let guard: GalaxyDetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GalaxyDetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
