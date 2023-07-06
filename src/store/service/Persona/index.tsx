import { IPersona } from "@/shared/PersonaBB";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const personaApi = createApi({
  reducerPath: "personaApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:4002/persona`,

    //hacer la auterizacion del Token
    headers:{
      "Authorization":`Bearer ${sessionStorage.getItem("token")}` 
    }




  }),
  tagTypes: ["persona"],
  endpoints: (builder) => ({
    ObtenerTodasPersona: builder.query({
      query: () => "/",
      providesTags: ["persona"],
    }),
    ObtenerUnaPersona: builder.query({
      query: (id: string) => ({
        url: `/persona/${id}`,
      }),
      providesTags: ["persona"],
    }),

    NuevaPersona: builder.mutation({
      query: (body: IPersona) => {
        return {
          url: "/nuevo-persona",
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["persona"],
    }),
    
    EditarPersona: builder.mutation({
      query: (body: IPersona) => {
        return {
          url: `/editar-persona/${body.id_Persona}`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: ["persona"],
    }),

    EliminarPersona: builder.mutation({
        query: (id: string) => {
          return {
            url: `/eliminar-persona/${id}`,
            method: "DELETE",
          };
        },
        invalidatesTags: ["persona"],
      }),
  }),
});

export const {
  useObtenerTodasPersonaQuery,
  useObtenerUnaPersonaQuery,
  useNuevaPersonaMutation,
  useEditarPersonaMutation,
  useEliminarPersonaMutation,

} = personaApi;
