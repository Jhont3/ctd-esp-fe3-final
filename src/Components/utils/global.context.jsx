import { useState } from "react";
import { createContext } from "react";

export const initialState = { theme: "light", data: [], getData: () => {}  };

export const ContextGlobal = createContext(initialState);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [data, setdata] = useState();
  

  const getData = async () => {
    const reponse = await fetch("https://jsonplaceholder.typicode.com/users");
    const data1 = await reponse.json();
    setdata(data1);
  };

  const value = {
    ...initialState,
    data: data,
    getData: getData,
  };

  return (
    <ContextGlobal.Provider value={ value }>
      {children}
    </ContextGlobal.Provider>
  );
};
