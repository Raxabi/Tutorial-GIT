import { Fragment, useEffect } from "react"
import NavigationBar from "./NavigationBar"
import contentData from "../Data"

import usePages from "../context/usePages"
import "../public/css/ContentRenderer.css"

/**
 * @param {{
 *  id: number
 *  heigth
 *  image: any
 * }} props
 */
const ContentRenderer = (props) => {

  const { actualPage, setActualPage } = usePages()

  /**
   * @param {number} id 
   * @returns {import("../context/usePages").Page}
   */
  const findSelectedPage = (id) => (
    contentData.find(page => page.id === id)
  )

  useEffect(() => {
    setActualPage(findSelectedPage(props.id))
  })

  return (
    <Fragment>
      <NavigationBar />
      <h1 className="mt-3 mx-auto" style={{maxWidth: "max-content"}}>{actualPage.titulo}</h1>
      <div className="card mb-3 mx-auto custom-mt" id="card">
        <div className="row g-0">
          <div className="col-md-4">
            <img id="image" src={props.image} className="img-fluid rounded-start m-auto" alt="control de versiones" />
          </div>
          <div className="col md-8">
            <div className="card-body mx-5 my-3">
              <p className="card-text fs-5">{actualPage.contenido}</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default ContentRenderer