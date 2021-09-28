import PropTypes from "prop-types"

const Header = (props) => {
    return (
        <header>
            <h1 style={headingStyle}>{props.title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: "Default Title",
}

Header.propTypes = {
    title: PropTypes.string,
}

const headingStyle = {
    color: "red", backgroundColor: "black"
}

export default Header

