import { IRed } from "@/shared/RedBB";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const redApi = createApi({
  reducerPath: "redApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:4002/red`,

    //hacer la auterizacion del Token
    headers:{
      "Authorization":`Bearer ${sessionStorage.getItem("token")}` 
    }




  }),
  tagTypes: ["red"],
  endpoints: (builder) => ({
    
    ObtenerTodasRed: builder.query({
      query: () => "/",
      providesTags: ["red"],
    }),

    ObtenerUnaRed: builder.query({
      query: (id: string) => ({
        url: `/red/${id}`,
      }),
      providesTags: ["red"],
    }),

    NuevaRed: builder.mutation({
      query: (body: IRed) => {
        return {
          url: "/nuevo-red",
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["red"],
    }),
    
    EditarRed: builder.mutation({
      query: (body: IRed) => {
        return {
          url: `/editar-red/${body.id_Red}`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: ["red"],
    }),

    EliminarRed: builder.mutation({
        query: (id: string) => {
          return {
            url: `/eliminar-red/${id}`,
            method: "DELETE",
          };
        },
        invalidatesTags: ["red"],
      }),
  }),
});

export const {
  useObtenerTodasRedQuery,
  useObtenerUnaRedQuery,
  useNuevaRedMutation,
  useEditarRedMutation,
  useEliminarRedMutation,

} = redApi;
