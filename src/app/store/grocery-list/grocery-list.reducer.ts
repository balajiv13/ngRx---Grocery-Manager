import { createReducer, on } from '@ngrx/store';
import { addGroceryItem, updateGroceryItem, deleteGroceryItem } from './grocery-list.actions';
import { initialGroceryListState, GroceryListState } from './grocery-list.state';

export const groceryListReducer = createReducer(
  initialGroceryListState,
  on(addGroceryItem, (state, { item }) => ({
    ...state,
    items: [...state.items, item]
  })),
  on(updateGroceryItem, (state, { item }) => ({
    ...state,
    items: state.items.map(i => (i.id === item.id ? item : i))
  })),
  on(deleteGroceryItem, (state, { id }) => ({
    ...state,
    items: state.items.filter(item => item.id !== id)
  }))
);