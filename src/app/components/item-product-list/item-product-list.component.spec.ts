import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemProductListComponent } from './item-product-list.component';

describe('ItemProductListComponent', () => {
  let component: ItemProductListComponent;
  let fixture: ComponentFixture<ItemProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemProductListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
