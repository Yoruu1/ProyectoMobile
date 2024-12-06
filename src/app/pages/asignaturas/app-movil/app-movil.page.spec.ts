import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppMovilPage } from './app-movil.page';

describe('AppMovilPage', () => {
  let component: AppMovilPage;
  let fixture: ComponentFixture<AppMovilPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMovilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
