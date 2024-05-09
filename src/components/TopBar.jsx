const TopBar = ({ name, toggleModal }) => {
  return (
    <div className='upperbar bg-white flex justify-between items-center border-b border-slate-200 p-5'>
      <h1 className='text-xl'>{name}</h1>
      {name === "Home" ? (
        <div className='helpers flex justify-between' onClick={toggleModal}>
          <button className=' bg-slate-800 text-white text-sm font-semi-bold rounded-lg p-2 mx-4'>
            Declare Incident
          </button>
        </div>
      ) : (
        <div className='test p-4'></div>
      )}
    </div>
  );
};

export default TopBar;
