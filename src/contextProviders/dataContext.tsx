import React, { createContext, useState } from "react";

export const DataContext = createContext({
  user: null,
  setUser: null
});

export const DataContextProvider = props => {
  const [user, setUser] = useState({ myName: "Bobicus", myAge: 55 });

  return (
    <DataContext.Provider value={{ user, setUser }}>
      {props.children}
    </DataContext.Provider>
  );
};
