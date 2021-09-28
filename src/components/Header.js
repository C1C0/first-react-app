import PropTypes from "prop-types"

const Header = ({title}) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <button className="btn">Add</button>
        </header>
    )
}

Header.defaultProps = {
    title: "Default Title",
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header

