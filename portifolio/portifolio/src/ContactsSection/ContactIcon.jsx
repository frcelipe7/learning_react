import PropTypes from "prop-types";

function ContactIcon(props) {
    return (
        <a target="_blank" href={props.link}>
            <div className="content">
                <div className="icon">
                    {props.svgIcon}
                </div>

                <p>{props.text}</p>
            </div>    
        </a>
    );
}

ContactIcon.propTypes = {
    link: PropTypes.string.isRequired,
    svgIcon: PropTypes.element.isRequired,
    text: PropTypes.string.isRequired
}

export default ContactIcon;