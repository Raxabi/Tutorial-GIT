import { Fragment } from "react"
import controlDeVersiones from "../public/images/control_de_versiones.png"
import ContentRenderer from "../components/ContentRenderer"

import "../public/css/index.css"

const Start = () => {
  return (
	  <Fragment>
      <ContentRenderer id={0} image={controlDeVersiones}/>
	  </Fragment>
  )
}

export default Start