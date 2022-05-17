import { TestBed } from '@angular/core/testing';

import { HomeUtilService } from './home-util.service';

describe('HomeUtilService', () => {
  let service: HomeUtilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeUtilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
