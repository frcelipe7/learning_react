import PropTypes from "prop-types";

function Button(props) {
    return (
        <a download={props.download} href={props.href} className={props.className}>
            {props.content}
        </a>
    );
}

Button.propTypes = {
    download: PropTypes.bool.isRequired,
    className: PropTypes.string,
    href: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ])
}

export default Button;