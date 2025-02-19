import PropTypes from "prop-types";

function TitleSection(props) {
    const title = props.title.toUpperCase();

    return (
        <div className="section_title">
            <h2>{title}</h2>
            <span>{title}</span>
        </div>
    );
}

TitleSection.propTypes = {
    title: PropTypes.string.isRequired
}

export default TitleSection;