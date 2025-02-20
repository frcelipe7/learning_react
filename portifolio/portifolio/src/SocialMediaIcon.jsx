import PropTypes from 'prop-types';

function SocialMediaIcon(props) {
    return (
        <a target="_blank" href={props.link}>
            {props.content}
        </a>
    );
}

SocialMediaIcon.propTypes = {
    link: PropTypes.string.isRequired,
    content: PropTypes.element.isRequired
}

export default SocialMediaIcon;