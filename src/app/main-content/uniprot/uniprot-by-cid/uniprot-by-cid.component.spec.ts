import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {UniprotByCidComponent} from "./uniprot-by-cid.component"

describe('UniprotByCidComponent', () => {
  let component: UniprotByCidComponent;
  let fixture: ComponentFixture<UniprotByCidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UniprotByCidComponent]
    })
      .compileComponents()
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniprotByCidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy()
  })
})
