import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PetsListPage } from './pets-list.page';

describe('PetsListPage', () => {
  let component: PetsListPage;
  let fixture: ComponentFixture<PetsListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PetsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
