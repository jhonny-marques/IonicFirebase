import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CuidadoresDetailPage } from './cuidadores-detail.page';

describe('CuidadoresDetailPage', () => {
  let component: CuidadoresDetailPage;
  let fixture: ComponentFixture<CuidadoresDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CuidadoresDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
