import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { faker } from '@faker-js/faker';

const albumsApi = createApi({
  // We use fetch instead of axios for the API calls
  reducerPath: 'albums',
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
  }),
  // We use endpoints to define the API calls
  endpoints(builder) {
    return {
      addAlbum: builder.mutation({
        // addAlbum(user) in AlbumsList.js to track the user
        invalidatesTags: (esult, error, user) => {
          return [{ type: 'Album', id: user.id}];
        },
        query: (user) => {
          return {
            url: '/albums',
            method: 'POST',
            body: {
              userId: user.id,
              title: faker.commerce.productName(),
            }
          };
        },
      }),


      fetchAlbums: builder.query({
        providesTags: (result, error, user) => {
          return [{ type: 'Album', id: user.id}];
        },
        query: (user) => {
          return {
            url: '/albums',
            params: {
              userId: user.id,
            },
            method: 'GET',
          };
        },
      }),
    };
  },
});

export const { 
  useFetchAlbumsQuery,
  useAddAlbumMutation
 } = albumsApi;
export { albumsApi };
