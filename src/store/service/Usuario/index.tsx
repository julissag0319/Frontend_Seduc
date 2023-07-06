import { IUsuario } from "@/shared/UsuarioBB";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usuarioApi = createApi({
  reducerPath: "usuarioApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:4002/usuario`,

    //hacer la auterizacion del Token
    headers:{
      "Authorization":`Bearer ${sessionStorage.getItem("token")}` 
    }




  }),
  tagTypes: ["usuario"],
  endpoints: (builder) => ({
    
    ObtenerTodosUsuario: builder.query({
      query: () => "/",
      providesTags: ["usuario"],
    }),

    ObtenerUnUsuario: builder.query({
      query: (id: string) => ({
        url: `/usuario/${id}`,
      }),
      providesTags: ["usuario"],
    }),

    NuevoUsuario: builder.mutation({
      query: (body: IUsuario) => {
        return {
          url: "/nuevo-usuario",
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["usuario"],
    }),
    
    EditarUsuario: builder.mutation({
      query: (body: IUsuario) => {
        return {
          url: `/editar-usuario/${body.id_Usuario}`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: ["usuario"],
    }),

    EliminarUsuario: builder.mutation({
      query: (id: string) => {
        return {
          url: `/eliminar-usuario/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["usuario"],
    }),
  }),
});

export const {
  useObtenerTodosUsuarioQuery,
  useObtenerUnUsuarioQuery,
  useNuevoUsuarioMutation,
  useEditarUsuarioMutation,
  useEliminarUsuarioMutation,

} = usuarioApi;
