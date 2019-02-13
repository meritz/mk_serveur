import { TestBed } from '@angular/core/testing';

import { FirestoreMessagService } from './firestore-messag.service';

describe('FirestoreMessagService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirestoreMessagService = TestBed.get(FirestoreMessagService);
    expect(service).toBeTruthy();
  });
});
