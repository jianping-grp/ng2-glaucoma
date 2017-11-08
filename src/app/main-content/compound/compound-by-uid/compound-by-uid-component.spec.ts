import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {CompoundByUidComponent} from "./compound-by-uid.component";


describe('CompoundByUidComponent', () => {
  let component: CompoundByUidComponent;
  let fixture: ComponentFixture<CompoundByUidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompoundByUidComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompoundByUidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
