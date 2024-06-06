import { createAction, props } from '@ngrx/store';
import { GroceryItem } from './grocery-list.state';

export const addGroceryItem = createAction(
  '[Grocery List] Add Item',
  props<{ item: GroceryItem }>()
);

export const updateGroceryItem = createAction(
  '[Grocery List] Update Item',
  props<{ item: GroceryItem }>()
);

export const deleteGroceryItem = createAction(
  '[Grocery List] Delete Item',
  props<{ id: string }>()
);