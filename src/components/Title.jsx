/**
 * @param {{
 *  title: string
 * }} props
 * @returns 
 */
const Title = (props) => {
    return (
        <h1 className="m-auto mw-100 mt-4 title">{props.title}</h1>
    )
}

export default Title