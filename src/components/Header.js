import PropTypes from "prop-types"
import Button from "./Button"
import { useLocation } from "react-router"

const Header = ({ title, onAdd, propShowAddTask }) => {

    const location = useLocation();

    return (
        <header className="header">
            <h1>{title}</h1>
            {location.pathname === '/' && <Button color={propShowAddTask ? 'red' : 'green'} text={propShowAddTask ? 'Close' : 'Show'} onClick={onAdd} />}
        </header>
    )
}

Header.defaultProps = {
    title: "Default Title",
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header;

