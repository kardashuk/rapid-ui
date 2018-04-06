import { TestBed, inject } from '@angular/core/testing';

import { GuestGuardService as GuestGuard } from './guest-guard.service';

describe('GuestGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuestGuard]
    });
  });

  it('should be created', inject([GuestGuard], (service: GuestGuard) => {
    expect(service).toBeTruthy();
  }));
});
