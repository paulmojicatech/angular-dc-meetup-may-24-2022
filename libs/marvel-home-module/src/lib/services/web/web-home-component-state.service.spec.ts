import { TestBed } from '@angular/core/testing';

import { WebHomeComponentStateService } from './web-home-component-state.service';

describe('WebHomeComponentStateService', () => {
  let service: WebHomeComponentStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebHomeComponentStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
