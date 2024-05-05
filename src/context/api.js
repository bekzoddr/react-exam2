import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://6634b1d29bb0df2359a2695a.mockapi.io/api/",
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("token");
    if (token) {
      headers.set("authentication", `${token}`);
    }
    return headers;
  },
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 });

export const api = createApi({
  reducerPath: "mainApi",
  baseQuery: baseQueryWithRetry,
  tagTypes: ["Product", "Category", "User"], // O'zgarish bo'lganda qayta fetch qilish uchun Tag Typelar
  endpoints: () => ({}),
});
