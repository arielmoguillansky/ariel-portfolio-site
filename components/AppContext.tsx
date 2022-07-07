import React, { createContext, useState } from "react";

interface AppContextTypes {
  showMenu?: boolean;
  setShowMenu?: any;
  handleMobileMenu?: any;
}

export const AppContext = createContext<any>(!null);

function AppContextProvider(props: any) {
  const [showMenu, setShowMenu] = useState(false);

  const handleMobileMenu = () => {
    setShowMenu(!showMenu);

    const body = document.querySelector("body");
    if (body) {
      !showMenu
        ? (body.style.overflowY = "hidden")
        : (body.style.overflowY = "");
    }
  };
  console.log("HERE");

  return (
    <div>
      <AppContext.Provider value={{ showMenu, handleMobileMenu }}>
        {props.children}
      </AppContext.Provider>
    </div>
  );
}

AppContextProvider.context = AppContext;

export default AppContextProvider;
