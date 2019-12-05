import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsEditingComponent } from './rooms-editing.component';

describe('RoomsEditingComponent', () => {
  let component: RoomsEditingComponent;
  let fixture: ComponentFixture<RoomsEditingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomsEditingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomsEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
