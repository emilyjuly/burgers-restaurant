import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchMenuData } from '../../services/api';

interface WebSettings {
  bannerImage: string;
  primaryColour: string;
}

interface MenuState {
  data: WebSettings | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: MenuState = {
  data: null,
  status: 'idle',
  error: null,
};

export const fetchMenu = createAsyncThunk('menu/fetchMenu', async () => {
  const response = await fetchMenuData();
  const data = await response.json();
  return data.webSettings;
});

const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenu.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(
        fetchMenu.fulfilled,
        (state, action: PayloadAction<WebSettings>) => {
          state.status = 'succeeded';
          state.data = action.payload;
        },
      )
      .addCase(fetchMenu.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      });
  },
});

export default menuSlice.reducer;
