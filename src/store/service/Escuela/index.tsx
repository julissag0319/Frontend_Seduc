import { IEscuela } from "@/shared/EscuelaBB";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const escuelaApi = createApi({
  reducerPath: "escuelaApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:4002/escuela`,

        //hacer la auterizacion del Token
        headers:{
          "Authorization":`Bearer ${sessionStorage.getItem("token")}` 
        }
  }),
  tagTypes: ["escuela"],
  endpoints: (builder) => ({
    ObtenerTodasEscuela: builder.query({
      query: () => "/",
      providesTags: ["escuela"],
    }),
    ObtenerUnaEscuela: builder.query({
      query: (id: string) => ({
        url: `/escuela/${id}`,
      }),
      providesTags: ["escuela"],
    }),

    NuevaEscuela: builder.mutation({
      query: (body: IEscuela) => {
        return {
          url: "/nuevo-escuela",
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["escuela"],
    }),
    
    EditarEscuela: builder.mutation({
      query: (body: IEscuela) => {
        return {
          url: `/editar-escuela/${body.id_Escuela}`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: ["escuela"],
    }),

    EliminarEscuela: builder.mutation({
        query: (id: string) => {
          return {
            url: `/eliminar-escuela/${id}`,
            method: "DELETE",
          };
        },
        invalidatesTags: ["escuela"],
      }),
  }),
});

export const {
  useObtenerTodasEscuelaQuery,
  useObtenerUnaEscuelaQuery,
  useNuevaEscuelaMutation,
  useEditarEscuelaMutation,
  useEliminarEscuelaMutation,

} = escuelaApi;
