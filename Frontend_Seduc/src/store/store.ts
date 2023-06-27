import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { departamentoApi } from "./service/Departamento";
import { tipousuarioApi } from "./service/TipoUsuario";
import { tipocargoApi } from "./service/TipoCargo";
import { municipioApi } from "./service/Municipio";
import { personaApi } from "./service/Persona";
import { redApi } from "./service/Red";
import { usuarioApi } from "./service/Usuario";
import { escuelaApi } from "./service/Escuela";



export const store = configureStore({
  reducer: {
    [departamentoApi.reducerPath]: departamentoApi.reducer,
    [tipousuarioApi.reducerPath]: tipousuarioApi.reducer,
    [tipocargoApi.reducerPath]: tipocargoApi.reducer,
    [municipioApi.reducerPath]: municipioApi.reducer,
    [personaApi.reducerPath]: personaApi.reducer,
    [redApi.reducerPath]: redApi.reducer,
    [usuarioApi.reducerPath]: usuarioApi.reducer,
    [escuelaApi.reducerPath]: escuelaApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      departamentoApi.middleware,
      tipousuarioApi.middleware,
      tipocargoApi.middleware,
      municipioApi.middleware,
      personaApi.middleware,
      redApi.middleware,
      usuarioApi.middleware,
      escuelaApi.middleware,
    ]),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;