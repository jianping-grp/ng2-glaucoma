import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {UniprotDbCompoundComponent} from "./uniprot-db-compound.component";

describe('UniprotDbCompoundComponent', () => {
  let component: UniprotDbCompoundComponent;
  let fixture: ComponentFixture<UniprotDbCompoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniprotDbCompoundComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniprotDbCompoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
