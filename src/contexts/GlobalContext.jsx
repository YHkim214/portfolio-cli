import { createContext, useState } from "react";

export const GlobalContext = createContext({
    isMemberMenuOpened: false,
    setIsMemberMenuOpened: () => {}
})

export const GlobalContextProvider = ({children}) => {

    const [isMemberMenuOpened, setIsMemberMenuOpened] = useState(false);

    const contextValue = {
        isMemberMenuOpened: isMemberMenuOpened,
        setIsMemberMenuOpened: setIsMemberMenuOpened
    }

    const handleGlobalClick = () => {
        if(isMemberMenuOpened) setIsMemberMenuOpened(false);
    }

    return <GlobalContext.Provider value={contextValue}><div style={{width: "100%"}} onClick={handleGlobalClick}>{children}</div></GlobalContext.Provider>
}