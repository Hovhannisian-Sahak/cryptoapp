import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bing-news-search1.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", [
        "b326c1484dmsh64b9007f0d645c5p141444jsneb0df7901dc9",
      ]);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`,
    }),
  }),
});
export const { useGetCryptoNewsQuery } = cryptoNewsApi;
