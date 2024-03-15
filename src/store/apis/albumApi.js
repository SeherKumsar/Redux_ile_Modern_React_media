import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const albumsApi = createApi({
    reducerPath: 'albums',
    // We use fetch instead of axios for the API calls
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'http://localhost:3005' 
    }),
});