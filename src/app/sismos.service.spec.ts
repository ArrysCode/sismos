import { TestBed } from '@angular/core/testing';

import { SismosService } from './sismos.service';

describe('SismosService', () => {
  let service: SismosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SismosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
