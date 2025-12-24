import type { CalcRequest, CalcResponse } from "@/common/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const exchangeApi = createApi({
  reducerPath: "exchangeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/b2api",
    prepareHeaders: (headers) => {
      headers.set("serial", "a7307e89-fbeb-4b28-a8ce-55b7fb3c32aa");
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    calcPrice: builder.mutation<CalcResponse, CalcRequest>({
      query: (body) => ({
        url: "/change/user/pair/calc",
        method: "POST",
        body: {
          pairId: 133,
          ...body,
        },
      }),
    }),
  }),
});

export const { useCalcPriceMutation } = exchangeApi;
