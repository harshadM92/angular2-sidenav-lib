import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular2SidenavLibComponent } from './angular2-sidenav-lib.component';

describe('Angular2SidenavLibComponent', () => {
  let component: Angular2SidenavLibComponent;
  let fixture: ComponentFixture<Angular2SidenavLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Angular2SidenavLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Angular2SidenavLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
