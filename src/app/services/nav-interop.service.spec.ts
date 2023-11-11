import { TestBed } from '@angular/core/testing';

import { NavInteropService } from './nav-interop.service';

describe('NavInteropService', () => {
  let service: NavInteropService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavInteropService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
