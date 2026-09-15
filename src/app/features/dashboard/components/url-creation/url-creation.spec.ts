import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UrlCreation } from './url-creation';

describe('UrlCreation', () => {
  let component: UrlCreation;
  let fixture: ComponentFixture<UrlCreation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UrlCreation],
    }).compileComponents();

    fixture = TestBed.createComponent(UrlCreation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
