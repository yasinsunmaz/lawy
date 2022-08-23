import { TestBed } from '@angular/core/testing';

import { ClientCredentialService } from './client-credential.service';

describe('ClientCredentialService', () => {
  let service: ClientCredentialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientCredentialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
