import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { usersReducer } from './slices/usersSlice';
import { albumsApi } from './apis/albumsApi';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    // albums: albumsApi.reducer
    [albumsApi.reducerPath]: albumsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(albumsApi.middleware);
  },
});

setupListeners(store.dispatch);

export * from './thunks/fetchUsers';
export * from './thunks/addUser';
export * from './thunks/removeUser';
// export the hooks for use in components
export { 
  useFetchAlbumsQuery,
  useAddAlbumMutation
} from './apis/albumsApi';
