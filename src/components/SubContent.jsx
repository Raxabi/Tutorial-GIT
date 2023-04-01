import Markdown from "markdown-to-jsx"

/**
 * @param {{
 *  subcontent: string
 * }} props
 * @returns 
 */
const SubContent = (props) => {
    return (
        <Markdown>{props.subcontent}</Markdown>
    )
}

export default SubContent