import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const userAuth = createApi({
  reducerPath: "userAuth",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/api/" }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (form) => ({
        url: "register",
        method: "POST",
        body: form,
      }),
    }),
    login: builder.mutation({
      query: (form) => ({
        url: "login",
        method: "POST",
        body: form,
        credentials: "include"
      }),
    }),
    query: builder.mutation({
      query: (form) => ({
        url: "query",
        method: "POST",
        body: form,
      }),
    }),
    parentsQuery: builder.mutation({
      query: (form) => ({
        url: "parentsenroll",
        method: "POST",
        body: form,
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useQueryMutation,
  useParentsQueryMutation
} = userAuth;
