import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerWebsiteComponent } from './banner-website.component';

describe('BannerWebsiteComponent', () => {
  let component: BannerWebsiteComponent;
  let fixture: ComponentFixture<BannerWebsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerWebsiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
