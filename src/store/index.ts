import { configureStore } from '@reduxjs/toolkit';
import restaurantReducer from './slices/restaurantSlice';
import menuReducer from './slices/menuSlice';

const store = configureStore({
  reducer: {
    restaurant: restaurantReducer,
    menu: menuReducer,
  },
});

export default store;
