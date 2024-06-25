import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchRestaurantData } from '../../services/api';

export const fetchRestaurant = createAsyncThunk(
  'restaurant/fetchRestaurant',
  async () => {
    const response = await fetchRestaurantData();
    return response.data;
  },
);

const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState: {
    data: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRestaurant.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRestaurant.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchRestaurant.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default restaurantSlice.reducer;
