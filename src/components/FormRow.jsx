const FormRow = ({
  type,
  name,
  placeholder,
  labelText,
  defaultValue = null,
  description,
  footerNote,
}) => {
  return (
    <div>
      <label
        htmlFor={name}
        className='block mb-1 text-sm text-slate-800 font-semibold'
      >
        {labelText}
      </label>
      {description && (
        <p className='description text-sm mb-2 text-slate-700'>{description}</p>
      )}

      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className='block bg-white shadow-sm border border-slate-300 rounded-md p-2 pr-16 w-full text-sm text-slate-800'
        required
      />
      {footerNote && <p className='text-xs mb-1'>{footerNote}</p>}
    </div>
  );
};

export default FormRow;
