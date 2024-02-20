import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsApiHeader = {
  'X-RapidAPI-Key': '6b6ae77f03mshe520373f6cc2410p19d167jsnbf769bf1f0e1',
    'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
};

const baseUrl = 'https://cryptocurrency-news2.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoNewsApiHeader });

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      // Updated query to use the complete base URL
      query: () => createRequest('/v1/theguardian'),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
