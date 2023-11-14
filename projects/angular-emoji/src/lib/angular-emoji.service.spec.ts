import { TestBed } from '@angular/core/testing';

import { AngularEmojiService } from './angular-emoji.service';

describe('AngularEmojiService', () => {
  let service: AngularEmojiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularEmojiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
