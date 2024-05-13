import Select from "react-select";

const customStyles = {
  control: (provided) => ({
    ...provided,

    // Tailwind p-4 equivalent
    border: "1px solid #d1d5db", // Tailwind border-2 border-gray-300 equivalent
    borderRadius: "0.375rem", // Tailwind rounded-md equivalent
    boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  }),
  // Add more style adjustments here as needed
};

const FormRowMultiSelect = ({
  options,
  isMult = true,
  name,
  labelText,
  defaultValue,
  description,
  footerNote,
}) => {
  return (
    <div className=''>
      <label
        htmlFor={name}
        className='block mb-1 text-sm text-slate-800 font-semibold'
      >
        {labelText}
      </label>
      {description && (
        <p className='description text-sm mb-2 text-slate-700'>{description}</p>
      )}
      <Select
        id={name}
        options={options}
        isMulti={isMult}
        name={name}
        defaultValue={defaultValue}
        styles={customStyles}
      />
      {footerNote && <p className='text-xs mb-1'>{footerNote}</p>}
    </div>
  );
};

export default FormRowMultiSelect;
