import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className='upperbar bg-white flex justify-between items-center border-b border-slate-200 p-4'>
      <h1 className='text-xl'>Home</h1>
      <div className='helpers flex justify-between'>
        <Link to='/dashboard/create-incident'>
          <button className=' bg-slate-800 text-white text-sm font-semi-bold rounded-lg p-2 mx-4'>
            Declare Incident
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
