import { TestBed, async } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { NationalState } from './national.state';
// import { NationalAction } from './national.actions';

describe('National actions', () => {
  let store: Store;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([NationalState])]
    }).compileComponents();
    store = TestBed.inject(Store);
  }));

  // it('should create an action and add an item', () => {
  //   store.dispatch(new NationalAction('item-1'));
  //   store
  //     .select(state => state.national.items)
  //     .subscribe((items: string[]) => {
  //       expect(items).toEqual(jasmine.objectContaining(['item-1']));
  //     });
  // });
});
