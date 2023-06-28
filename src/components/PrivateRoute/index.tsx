import { FC, PropsWithChildren, useEffect, useState } from "react";

export const PrivateRoute: FC<PropsWithChildren> = ({ children }) => {
  const [authorized, setAuthorized] = useState(false);
  useEffect(() => {
    fetch("http://localhost:4002/auth/check-token")
      .then((res) => res.json())
      .then((res) => {
        setAuthorized(res);
      });
  }, []);

  if (authorized) {
    return <>{children}</>;
  }
  return <>No autorizado</>;
};
