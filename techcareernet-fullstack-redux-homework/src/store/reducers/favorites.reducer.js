const initialState = {
  favorites: [],
};
export function FavoritesReducer(state = initialState, action) {
  switch (action.type) {
    case "FAVORITES_ADD":
      return { ...state, favorites: [...state.favorites, action.payload] };
    case "FAVORITES_REMOVE":
      return {
        ...state,
        favorites: state.favorites.filter(
          (product) => product.id !== action.payload
        ),
      };
    default:
      return state;
  }
}
