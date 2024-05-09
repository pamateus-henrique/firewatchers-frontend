import IconTemp from "../components/IconTemp";
import { TbCategory } from "react-icons/tb";
import { FiClock } from "react-icons/fi";
const BreadCrumb = () => {
  return (
    <div className='bg-slate-100 w-full flex justify-start items-center p-3 px-8 space-x-4'>
      <div className='breadcrumb bg-white flex px-2 shadow-sm rounded-full border border-slate-300 text-sm text-slate-500'>
        <div className='flex items-center'>
          <div className='px-2'>Investigating</div>
          <IconTemp />
        </div>

        <div className='flex items-center'>
          <div className='px-2'>Fixing</div>
          <span>
            <IconTemp />
          </span>
        </div>
        <div className='flex items-center'>
          <div className='px-2'>Monitoring</div>
          <IconTemp />
        </div>
        <div className='flex items-center'>
          <div className='px-2'>Clean up</div>
          <IconTemp />
        </div>
        <div className='flex items-center'>
          <div className='px-2'>...</div>
        </div>
      </div>
      <div className='flex items-center justify-center text-slate-500 space-x-2 text-sm'>
        <div className='  flex justify-center items-center space-x-1 '>
          <TbCategory />
          <p>Banking</p>
        </div>
        <div className=' flex justify-center items-center space-x-1'>
          <FiClock />
          <p>Ongoing for 1d 17h</p>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
