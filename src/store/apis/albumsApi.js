import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { faker } from '@faker-js/faker';
 

// DEV ONLY!!!
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

const albumsApi = createApi({
  // We use fetch instead of axios for the API calls
  reducerPath: 'albums',
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
    // REMOVE FOR PRODUCTION
    // We use fetchFn to pause the request for 1 second
    fetchFn: async (...args) => {
      await pause(1000);
      return fetch(...args);
    }
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
