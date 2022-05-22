import { TestBed } from '@angular/core/testing';

import { IonicHomeComponentStateService } from './ionic-home-component-state.service';

describe('IonicHomeComponentStateService', () => {
  let service: IonicHomeComponentStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IonicHomeComponentStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
