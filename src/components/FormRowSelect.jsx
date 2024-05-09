const FormRowSelect = ({
  name,
  labelText,
  defaultValue,
  list,
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
      <select
        name={name}
        id={name}
        className='block bg-white shadow-sm border border-slate-300 rounded-md p-2 w-full text-sm text-slate-700'
        defaultValue={defaultValue}
      >
        {list.map((item) => {
          return (
            <option key={item} value={item} className=' text-slate-800'>
              {item}
            </option>
          );
        })}
      </select>
      {footerNote && (
        <p className='text-xs my-1 text-slate-600'>{footerNote}</p>
      )}
    </div>
  );
};

export default FormRowSelect;
