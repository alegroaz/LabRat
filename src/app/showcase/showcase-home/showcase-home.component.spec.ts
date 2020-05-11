import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseHomeComponent } from './showcase-home.component';

describe('ShowcaseHomeComponent', () => {
  let component: ShowcaseHomeComponent;
  let fixture: ComponentFixture<ShowcaseHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowcaseHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcaseHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
