import { createContext, useContext, useState } from "react"
import contentData from "../Data"

const initialPage = contentData[0]

/**
 * @typedef {{
 *  id: number
 *  titulo: string
 *  contenido: string
 * }} Page
 */

/**
 * @type {{
 * actualPage: Page
 * setActualPage: React.Dispatch<React.SetStateAction<Page>>
 * }}
 */
const context = {
    actualPage: initialPage,
    setActualPage: undefined
}

const PagesContext = createContext(context);

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