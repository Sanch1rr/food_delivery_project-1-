import { createContext, useState, useContext, useEffect } from "react";

export const UserContext = createContext({});

export function useUser() {
  return useContext(UserContext);
}

export const UserProvider = (props) => {
  const [user, setUser] = useState();
  const [signUp, setSignUp] = useState({});
  useEffect(() => {
    if (localStorage.getItem("user")) {
      let data = JSON.parse(localStorage.getItem("user"));
      setUser({
        name: data.name,
        email: data.email,
        password: data.password,
        id: data.id,
        address: data.address,
      });
    } else if (localStorage.getItem("user")) {
      const data = JSON.parse(localStorage.getItem("user"));
      setSignUp({
        userName: data.name,
      });
      console.log("checked");
    }
  }, []);

  return (
    <UserContext.Provider value={[user, setUser]} value1={[signUp, setSignUp]}>
      {props.children}
    </UserContext.Provider>
  );
};
