import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemEditQtyComponent } from './item-edit-qty.component';

describe('ItemEditQtyComponent', () => {
  let component: ItemEditQtyComponent;
  let fixture: ComponentFixture<ItemEditQtyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemEditQtyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemEditQtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
