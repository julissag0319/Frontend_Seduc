import { IMunicipio } from "@/shared/MunicipioBB";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const municipioApi = createApi({
  reducerPath: "municipioApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:4002/municipio`,

    //hacer la auterizacion del Token
    headers:{
      "Authorization":`Bearer ${sessionStorage.getItem("token")}` 
    }


  }),
  tagTypes: ["municipio"],
  endpoints: (builder) => ({
    ObtenerTodoMunicipio: builder.query({
      query: () => "/",
      providesTags: ["municipio"],
    }),
    ObtenerUnMunicipio: builder.query({
      query: (id: string) => ({
        url: `/municipio/${id}`,
      }),
      providesTags: ["municipio"],
    }),
    NuevoMunicipio: builder.mutation({
      query: (body: IMunicipio) => {
        return {
          url: "/nuevo-municipio",
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["municipio"],
    }),
    EditarMunicipio: builder.mutation({
      query: (body: IMunicipio) => {
        return {
          url: `/editar-municipio/${body.id_Municipio}`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: ["municipio"],
    }),
    EliminarMunicipio: builder.mutation({
      query: (id: string) => {
        return {
          url: `/eliminar-municipio/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["municipio"],
    }),
  }),
});

export const {
  useObtenerTodoMunicipioQuery,
  useObtenerUnMunicipioQuery,
  useNuevoMunicipioMutation,
  useEditarMunicipioMutation,
  useEliminarMunicipioMutation,
} = municipioApi;
