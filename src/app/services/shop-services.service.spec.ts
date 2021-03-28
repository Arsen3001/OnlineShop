import { TestBed } from '@angular/core/testing';

import { ShopServiceService } from './shop-services.service';

describe('shopServiceService', () => {
  let service: ShopServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
