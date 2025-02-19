import PropTypes from 'prop-types';

function AboutIcon(props) {
    return (
        <div className={`icon ${props.icon}`}>
            <img src={props.src} alt={`${props.icon} image`} />
            <p>{props.text}</p>
        </div>
    );
}

AboutIcon.propTypes = {
    icon: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default AboutIcon;