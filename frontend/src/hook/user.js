import React, {createContext, useState} from "react";
import {sendData} from "../services/sendData";

export const UserContext = createContext({
  oi: "oioi",
  useLogin: () => {}
});

export const oi = "OOOOOI";

export const useLogin = async(user, pass) => {
  try {
    const request = await sendData("/auth/local/signin", {
      username: user,
      password: pass,
    });

    if (request.data) {
      console.log(request);
      localStorage.setItem("token", request.data?.access_token);
    }

  } catch (err) {
    console.error(err);
  }
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [pass, setPass] = useState(false);


  useLogin(user, pass);

  return (
    <UserContext.Provider value={{oi, useLogin}}>
      {children}
    </UserContext.Provider>
  );
};



