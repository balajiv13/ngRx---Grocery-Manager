export interface GroceryItem {
    id: string;
    name: string;
    quantity: number;
}

export interface GroceryListState {
    items: GroceryItem[];
}

export const initialGroceryListState: GroceryListState = {
    items: []
};
