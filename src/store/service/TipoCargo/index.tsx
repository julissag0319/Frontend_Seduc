import { ITipoCargo } from "@/shared/TipoCargoBB";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tipocargoApi = createApi({
  reducerPath: "tipocargoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:4002/tipo_cargo`,


    //hacer la auterizacion del Token
    headers:{
      "Authorization":`Bearer ${sessionStorage.getItem("token")}` 
    }



  }),
  tagTypes: ["tipo_cargo"],
  endpoints: (builder) => ({
    ObtenerTodoTipoCargo: builder.query({
      query: () => "/",
      providesTags: ["tipo_cargo"],
    }),
    ObtenerUnTipoCargo: builder.query({
      query: (id: string) => ({
        url: `/tipo_cargo/${id}`,
      }),
      providesTags: ["tipo_cargo"],
    }),
    NuevoTipoCargo: builder.mutation({
      query: (body: ITipoCargo) => {
        return {
          url: "/nuevo-tipo_cargo",
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["tipo_cargo"],
    }),
    EditarTipoCargo: builder.mutation({
      query: (body: ITipoCargo) => {
        return {
          url: `/editar-tipo_cargo/${body.id_Tipo_Cargo}`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: ["tipo_cargo"],
    }),
    EliminarTipoCargo: builder.mutation({
      query: (id: string) => {
        return {
          url: `/eliminar-tipo_cargo/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["tipo_cargo"],
    }),
  }),
});

export const {
  useObtenerTodoTipoCargoQuery,
  useObtenerUnTipoCargoQuery,
  useNuevoTipoCargoMutation,
  useEditarTipoCargoMutation,
  useEliminarTipoCargoMutation,
} = tipocargoApi;
