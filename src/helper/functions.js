export function product_find_index(state, id) {
    return state.selected_items.findIndex((item) => item.id === id);
}