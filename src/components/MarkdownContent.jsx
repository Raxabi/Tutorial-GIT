import Title from "./Title"
import SubContent from "./SubContent"

/**
 * @param {{
 *  title?: string
 *  subcontent: string
 * }} props
 * @returns
 */
const MarkdownContent = (props) => {
  return (
    <>
      <Title title={props.title} />
      <SubContent subcontent={props.subcontent}/>
    </>
  )
}

export default MarkdownContent