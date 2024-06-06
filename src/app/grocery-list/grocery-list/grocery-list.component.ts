import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addGroceryItem, updateGroceryItem, deleteGroceryItem } from '../../store/grocery-list/grocery-list.actions';
import { GroceryItem, GroceryListState } from '../../store/grocery-list/grocery-list.state';


@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrl: './grocery-list.component.scss'
})
export class GroceryListComponent {
  items$!: Observable<GroceryItem[]>;
  newItem: GroceryItem = { id: '', name: '', quantity: 0 };

  constructor(private store: Store<GroceryListState>) {
  }
  
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.items$ = this.store.select(state => state.items);
    this.items$.subscribe();
  }

  addItem() {
    const item: GroceryItem = {
      id: Date.now().toString(),
      name: this.newItem.name,
      quantity: this.newItem.quantity
    };
    this.store.dispatch(addGroceryItem({ item }));
    this.newItem = { id: '', name: '', quantity: 0 };
    console.log('****', this.items$)
  }

  updateItem(item: GroceryItem) {
    this.store.dispatch(updateGroceryItem({ item }));
  }

  deleteItem(id: string) {
    this.store.dispatch(deleteGroceryItem({ id }));
  }
}
