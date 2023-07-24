import { Administrador, Nacional, Departamental,Distrital,Red,Lector } from "./roles";
const roles = Object.freeze({
  Administrador: Administrador,
  Nacional: Nacional,
  Departamental: Departamental,
  Distrital: Distrital,
  Red: Red,
  Lector: Lector
});

export const hasRole = (arryRole: string[], rol: string) => {
  const roleArray = Object.keys(roles);

  const result = arryRole.filter((role) =>
    roleArray.find((item) => item === role)
  );

  return result.includes(rol);

};