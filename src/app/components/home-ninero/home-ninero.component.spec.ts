import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNineroComponent } from './home-ninero.component';

describe('HomeNineroComponent', () => {
  let component: HomeNineroComponent;
  let fixture: ComponentFixture<HomeNineroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeNineroComponent]
    });
    fixture = TestBed.createComponent(HomeNineroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
