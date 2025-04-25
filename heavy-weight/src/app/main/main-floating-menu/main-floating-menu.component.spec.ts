import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFloatingMenuComponent } from './main-floating-menu.component';

describe('MainFloatingMenuComponent', () => {
  let component: MainFloatingMenuComponent;
  let fixture: ComponentFixture<MainFloatingMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainFloatingMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainFloatingMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
