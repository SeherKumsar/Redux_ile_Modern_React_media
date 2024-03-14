import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers} from '../thunks/fetchUsers';

const usersSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  extraReducers(builder) {
    builder.addCase(fetchUsers.pending, (state, action) => {
      // Update our state object howerver appropriate
      // to show the user what we are loading data
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = true;
      state.data = action.payload;
      //payload whatever action autcomplete side-effects we want to do here
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
      // When the request fails, an error object is automatically created for us
    });
  }
});

export const usersReducer = usersSlice.reducer;