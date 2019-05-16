import { TestBed } from '@angular/core/testing';

import { Angular2SidenavLibService } from './angular2-sidenav-lib.service';

describe('Angular2SidenavLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Angular2SidenavLibService = TestBed.get(Angular2SidenavLibService);
    expect(service).toBeTruthy();
  });
});
