import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UrlsBoard } from './urls-board';

describe('UrlsBoard', () => {
  let component: UrlsBoard;
  let fixture: ComponentFixture<UrlsBoard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UrlsBoard],
    }).compileComponents();

    fixture = TestBed.createComponent(UrlsBoard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
