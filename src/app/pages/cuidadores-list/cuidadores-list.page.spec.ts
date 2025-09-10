import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CuidadoresListPage } from './cuidadores-list.page';

describe('CuidadoresListPage', () => {
  let component: CuidadoresListPage;
  let fixture: ComponentFixture<CuidadoresListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CuidadoresListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
