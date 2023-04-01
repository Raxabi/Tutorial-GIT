import usePages from "../context/usePages"
import Markdown from "markdown-to-jsx";

import "../public/css/index.css"

const ContentDisplay = () => {
  const {actualPage} = usePages();

  return (
    <div className="main-content">
      {
        actualPage.id !== 4 ? <p>{actualPage.contenido.subcontenido}</p> : <Markdown>{actualPage.contenido.subcontenido}</Markdown>
      } 
    </div>
  )
}


export default ContentDisplay