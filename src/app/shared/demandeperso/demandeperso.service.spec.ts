import { TestBed } from '@angular/core/testing';

import { DemandepersoService } from './demandeperso.service';

describe('DemandePersoService', () => {
  let service: DemandepersoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemandepersoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
