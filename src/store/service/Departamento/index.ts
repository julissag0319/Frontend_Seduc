import { IDepartamento } from "@/shared/DepartamentoBB";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const departamentoApi = createApi({
  reducerPath: "departamentoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:4002/departamento`,


    headers:{
      "Authorization":`Bearer ${sessionStorage.getItem("token")}` 
    }


  }),
  tagTypes: ["departamento"],
  endpoints: (builder) => ({
    ObtenerTodoDepartamento: builder.query({
      query: () => "/",
      providesTags: ["departamento"],
    }),
    ObtenerUnDepartamento: builder.query({
      query: (id: string) => ({
        url: `/departamento/${id}`,
      }),
      providesTags: ["departamento"],
    }),
    NuevoDepartamento: builder.mutation({
      query: (body: IDepartamento) => {
        return {
          url: "/nuevo-departamento",
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["departamento"],
    }),
    EditarDepartamento: builder.mutation({
      query: (body: IDepartamento) => {
        return {
          url: `/editar-departamento/${body.id_Departamento}`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: ["departamento"],
    }),
    EliminarDepartamento: builder.mutation({
      query: (id: string) => {
        return {
          url: `/eliminar-departamento/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["departamento"],
    }),
  }),
});

export const {
  useObtenerTodoDepartamentoQuery,
  useObtenerUnDepartamentoQuery,
  useNuevoDepartamentoMutation,
  useEditarDepartamentoMutation,
  useEliminarDepartamentoMutation,
} = departamentoApi;
