import PropTypes from "prop-types"
import Button from "./Button"

const Header = ({ title, onAdd, propShowAddTask }) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color={propShowAddTask ? 'red' : 'green'} text={propShowAddTask ? 'Close' : 'Show'} onClick={onAdd} />
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

