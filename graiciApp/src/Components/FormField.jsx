import PropTypes from 'prop-types';

const FormField = ({ label, name, value, isEditing, onChange }) => {
    return (
    <div className="flex flex-col md:flex-row md:items-center mt-2">
        <label className="text-base font-semibold w-56 text-left whitespace-nowrap">{label}</label>
        <div className="flex-1">
        {isEditing ? (
            <input
            name={name}
            value={value}
            onChange={onChange}
            className="w-full p-2 border rounded text-left bg-black/[0.03] text-base"
            />
        ) : (
            <span className="block p-2 text-left text-base">{value}</span>
        )}
        </div>
    </div>
    );
};

FormField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    isEditing: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired
};

export default FormField;