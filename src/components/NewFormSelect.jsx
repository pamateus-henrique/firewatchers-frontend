const NewFormRowSelect = ({ name, labelText, defaultValue, list }) => {
  return (
    <div>
      <label htmlFor={name} className='block mb-2 text-sm text-slate-800'>
        {labelText}
      </label>
      <select
        name={name}
        id={name}
        className='block bg-slate-50 border border-slate-300 rounded-md p-2 w-full text-sm'
        defaultValue={defaultValue}
      >
        <option value=''>-- Select an option --</option>
        {list.map(({ id, name }) => {
          return (
            <option key={id} value={id} className=' text-slate-800'>
              {name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default NewFormRowSelect;
