import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {UniprotByNameComponent} from "./uniprot-by-name.component";

describe('UniprotByNameComponent', () => {
  let component: UniprotByNameComponent;
  let fixture: ComponentFixture<UniprotByNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniprotByNameComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniprotByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
