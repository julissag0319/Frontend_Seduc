import { ITipoUsuario } from "@/shared/TipoUsuarioBB";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tipousuarioApi = createApi({
  reducerPath: "tipousuarioApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:4002/tipo_usuario`,


    //hacer la auterizacion del Token
    headers:{
      "Authorization":`Bearer ${sessionStorage.getItem("token")}` 
    }



  }),
  tagTypes: ["tipo_usuario"],
  endpoints: (builder) => ({
    ObtenerTodoTipoUsuario: builder.query({
      query: () => "/",
      providesTags: ["tipo_usuario"],
    }),
    ObtenerUnTipoUsuario: builder.query({
      query: (id: string) => ({
        url: `/tipo_usuario/${id}`,
      }),
      providesTags: ["tipo_usuario"],
    }),
    NuevoTipoUsuario: builder.mutation({
      query: (body: ITipoUsuario) => {
        return {
          url: "/nuevo-tipo_usuario",
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["tipo_usuario"],
    }),
    EditarTipoUsuario: builder.mutation({
      query: (body: ITipoUsuario) => {
        return {
          url: `/editar-tipo_usuario/${body.id_Tipo_Usuario}`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: ["tipo_usuario"],
    }),
    EliminarTipoUsuario: builder.mutation({
      query: (id: string) => {
        return {
          url: `/eliminar-tipo_usuario/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["tipo_usuario"],
    }),
  }),
});

export const {
  useObtenerTodoTipoUsuarioQuery,
  useObtenerUnTipoUsuarioQuery,
  useNuevoTipoUsuarioMutation,
  useEditarTipoUsuarioMutation,
  useEliminarTipoUsuarioMutation,
} = tipousuarioApi;
