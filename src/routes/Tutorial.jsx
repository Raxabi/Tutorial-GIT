import NavigationBar from "../components/NavigationBar"
import "../public/css/tutorial.css"
import contentData from "../Data"
import { marked } from "marked"

const Tutorial = () => {
  return (
    <div>
      <NavigationBar />
      <div id="tutorial-container" dangerouslySetInnerHTML={{__html: marked(contentData[4].contenido)}}/>
    </div>
  )
}

export default Tutorial