const FormRow = ({
  type,
  name,
  placeholder,
  labelText,
  defaultValue = null,
}) => {
  return (
    <div>
      <label htmlFor={name} className='block mb-2 text-sm text-slate-800'>
        {labelText}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className='block bg-slate-50 border border-slate-300 rounded-md p-2 pr-16 w-full text-sm'
        required
      />
    </div>
  );
};

export default FormRow;
