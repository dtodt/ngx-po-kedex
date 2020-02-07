import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { PokeApiService } from './poke-api.service';

describe('PokeApiService', () => {
  let service: PokeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(PokeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
