import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAppStoreComponent } from './my-app-store.component';

describe('MyAppStoreComponent', () => {
  let component: MyAppStoreComponent;
  let fixture: ComponentFixture<MyAppStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAppStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAppStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
