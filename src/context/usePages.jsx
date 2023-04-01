import { createContext, useContext, useState } from "react"
import contentData from "../Data"

const initialPage = contentData[0]

const PagesContext = createContext({
    actualPage: initialPage,
    setActualPage: null
});

export const PagesContextProvider = ({ children }) => {

    const [page, setPage] = useState(initialPage)

    return (
        <PagesContext.Provider value={{actualPage: page, setActualPage: setPage}}>
            { children }
        </PagesContext.Provider>
    )
}


export default function usePages() {
    return useContext(PagesContext)
}