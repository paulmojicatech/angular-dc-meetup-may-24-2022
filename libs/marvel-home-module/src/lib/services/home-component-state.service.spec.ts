import { TestBed } from '@angular/core/testing';

import { HomeComponentStateService } from './home-component-state.service';

describe('HomeComponentStateService', () => {
  let service: HomeComponentStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeComponentStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
