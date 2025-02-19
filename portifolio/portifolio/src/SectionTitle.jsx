import PropTypes from "prop-types";

function SectionTitle(props) {
    const title = props.title.toUpperCase();

    return (
        <div className="section_title">
            <h2>{title}</h2>
            <span>{title}</span>
        </div>
    );
}

SectionTitle.propTypes = {
    title: PropTypes.string.isRequired
}

export default SectionTitle;