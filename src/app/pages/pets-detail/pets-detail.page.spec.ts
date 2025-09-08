import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PetsDetailPage } from './pets-detail.page';

describe('PetsDetailPage', () => {
  let component: PetsDetailPage;
  let fixture: ComponentFixture<PetsDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PetsDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
