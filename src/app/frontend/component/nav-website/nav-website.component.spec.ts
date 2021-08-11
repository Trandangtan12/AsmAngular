import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavWebsiteComponent } from './nav-website.component';

describe('NavWebsiteComponent', () => {
  let component: NavWebsiteComponent;
  let fixture: ComponentFixture<NavWebsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavWebsiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
