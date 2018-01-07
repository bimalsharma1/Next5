import { TestBed, inject } from '@angular/core/testing';

import { Next5Service } from './next5.service';

describe('Next5Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Next5Service]
    });
  });

  it('should be created', inject([Next5Service], (service: Next5Service) => {
    expect(service).toBeTruthy();
  }));
});
