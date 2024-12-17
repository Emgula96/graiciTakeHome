import PropTypes from 'prop-types';

const SectionHeader = ({ title }) => {
    return (
    <h3 className="text-[#B95319] font-semibold mb-2 text-left text-lg">{title}</h3>
    );
};

SectionHeader.propTypes = {
    title: PropTypes.string.isRequired
};

export default SectionHeader;