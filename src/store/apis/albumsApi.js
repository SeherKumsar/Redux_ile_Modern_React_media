import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const albumsApi = createApi({
  // We use fetch instead of axios for the API calls
  reducerPath: 'albums',
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
  }),
  // We use endpoints to define the API calls
  endpoints(builder) {
    return {
      fetchAlbums: builder.query({
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

export const { useFetchAlbumsQuery } = albumsApi;
export { albumsApi };
