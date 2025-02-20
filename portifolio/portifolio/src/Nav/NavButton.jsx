import PropTypes from "prop-types";

function NavButton(props) {
    return (
        <li className={props.section}>
            <a href={props.section}>
                {props.text}
            </a>
        </li>
    );
}

NavButton.propTypes = {
    section: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default NavButton;