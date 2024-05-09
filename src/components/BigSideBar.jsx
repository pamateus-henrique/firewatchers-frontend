import NavLinks from "./NavLinks";

const BigSideBar = () => {
  return (
    <div className='sidebar bg-slate-900 flex flex-col space-y-8 min-w-64 max-w-64'>
      <div className='hero flex items-center justify-center p-6 border-b border-slate-200'>
        <p className='text-lg text-white '>FireWatchers</p>
      </div>
      <NavLinks />
    </div>
  );
};

export default BigSideBar;
