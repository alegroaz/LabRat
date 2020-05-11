import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseCustomersComponent } from './showcase-customers.component';

describe('ShowcaseCustomersComponent', () => {
  let component: ShowcaseCustomersComponent;
  let fixture: ComponentFixture<ShowcaseCustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowcaseCustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcaseCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
