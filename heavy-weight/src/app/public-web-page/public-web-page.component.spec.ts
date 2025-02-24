import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicWebPageComponent } from './public-web-page.component';

describe('PublicWebPageComponent', () => {
  let component: PublicWebPageComponent;
  let fixture: ComponentFixture<PublicWebPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PublicWebPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicWebPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
