import React, { useContext } from "react";
import jwtDecode from "jwt-decode";
import AuthContext from "./reactContext";

import authStorage from "./store";

export default function useAuth() {
  const { user, setUser } = useContext(AuthContext);

  const logIn = (authToken) => {
    const user = jwtDecode(authToken.accessToken);
    setUser(user);
    authStorage.storeAccessToken(authToken.accessToken);
    authStorage.storeRefreshToken(authToken.refreshToken);
  };

  const logOut = () => {
    setUser(null);
    authStorage.removeToken();
  };

  return { user, logIn, logOut };
}
