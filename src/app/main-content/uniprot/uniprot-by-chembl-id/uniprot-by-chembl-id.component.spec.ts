import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {UniprotByChemblIdComponent} from "./uniprot-by-chembl-id.component";

describe('UniprotByChemblIdComponent', () => {
  let component: UniprotByChemblIdComponent;
  let fixture: ComponentFixture<UniprotByChemblIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniprotByChemblIdComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniprotByChemblIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
