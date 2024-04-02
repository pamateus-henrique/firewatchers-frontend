import Select from "react-select";

const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "rgb(248, 250, 252)",
    // Tailwind p-4 equivalent
    border: "1px solid #d1d5db", // Tailwind border-2 border-gray-300 equivalent
    borderRadius: "0.375rem", // Tailwind rounded-md equivalent
  }),
  // Add more style adjustments here as needed
};

const FormRowMultiSelect = ({ options, isMult = true, name, labelText }) => {
  return (
    <div className=''>
      <label htmlFor={name} className='block mb-2 text-sm text-slate-800'>
        {labelText}
      </label>
      <Select
        id={name}
        options={options}
        isMulti={isMult}
        name={name}
        styles={customStyles}
      />
    </div>
  );
};

export default FormRowMultiSelect;
