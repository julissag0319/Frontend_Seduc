
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const listarPersonaExcelApi = createApi({
  reducerPath: "listarPersonaExcelApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:4002/obtenerexcelpersona`,

    //hacer la auterizacion del Token
    headers:{
      "Authorization":`Bearer ${sessionStorage.getItem("token")}` 
    }


  }),
  tagTypes: ["obtenerexcelpersona"],
  endpoints: (builder) => ({
    ObtenerExcelPersona: builder.query({
      query: () => "/",
      providesTags: ["obtenerexcelpersona"],
    }),
  }),
});

export const {
  useObtenerExcelPersonaQuery,
} = listarPersonaExcelApi;
