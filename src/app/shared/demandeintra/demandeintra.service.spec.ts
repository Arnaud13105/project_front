import { TestBed } from '@angular/core/testing';

import { DemandeintraService } from './demandeintra.service';

describe('DemandeintraService', () => {
  let service: DemandeintraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemandeintraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
