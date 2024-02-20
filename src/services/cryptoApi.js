import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


const cryptoApiHeader = {
    'X-RapidAPI-Key': '6b6ae77f03mshe520373f6cc2410p19d167jsnbf769bf1f0e1',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}   
const baseUrl ='https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({url, headers: cryptoApiHeader })
export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery:   fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) =>  createRequest(`/coins?limit=${count}`),
        }),
        getCryptoDetails:builder.query({
            query: (coinId) =>  createRequest(`/coin/${coinId}`),
        }),
        getCryptoHistory:builder.query({
            query: ({coinId,timePeriod}) =>  createRequest(`/coin/${coinId}/history`),
        }),
        getExchanges: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}/exchanges`),
          }),
    })
})
export const {
    useGetCryptosQuery,useGetCryptoDetailsQuery,useGetCryptoHistoryQuery,useGetExchangesQuery
}  = cryptoApi;




