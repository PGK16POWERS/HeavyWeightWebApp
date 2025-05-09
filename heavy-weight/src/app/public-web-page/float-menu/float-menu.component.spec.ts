import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatMenuComponent } from './float-menu.component';

describe('FloatMenuComponent', () => {
  let component: FloatMenuComponent;
  let fixture: ComponentFixture<FloatMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FloatMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FloatMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
