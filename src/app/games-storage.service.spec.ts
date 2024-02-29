import { TestBed } from '@angular/core/testing';

import { GamesStorageService } from './games-storage.service';

describe('GamesStorageService', () => {
  let service: GamesStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GamesStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
