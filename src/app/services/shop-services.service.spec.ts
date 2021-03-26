import { TestBed } from '@angular/core/testing';

import { shopServiceService } from './shop-services.service';

describe('shopServiceService', () => {
  let service: shopServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(shopServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
