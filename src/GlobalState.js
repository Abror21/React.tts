import React, { useState } from 'react'

export const GlobalState = React.createContext()

export function Provider(props){
    const [tts, setTts] = useState(true)
    const [menu, setMenu] = useState(false)
    return(
        <GlobalState.Provider value={{
            tts: tts,
            menu: menu,
            activeMenu: () => {
                setMenu(true)
            },
            inActiveMenu: () => {
                setMenu(false)
            },
            makeTts: () => setTts(true),
            makeStt: () => setTts(false)
        }}>
            {props.children}
        </GlobalState.Provider>
    )
}