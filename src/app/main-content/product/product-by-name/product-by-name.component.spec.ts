import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {ProductByNameComponent} from "./product-by-name.component"

describe('ProductByNameComponent', () => {
  let component: ProductByNameComponent;
  let fixture: ComponentFixture<ProductByNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductByNameComponent]
    })
      .compileComponents()
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy()
  })
})
