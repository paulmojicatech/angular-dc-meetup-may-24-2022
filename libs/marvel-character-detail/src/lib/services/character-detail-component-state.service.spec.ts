import { TestBed } from '@angular/core/testing';

import { CharacterDetailComponentStateService } from './character-detail-component-state.service';

describe('CharacterDetailComponentStateService', () => {
  let service: CharacterDetailComponentStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterDetailComponentStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
