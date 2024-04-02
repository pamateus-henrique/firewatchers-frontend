import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className='container min-h-screen min-w-full flex justify-center items-center'>
      <Link to='/register' className='p-2 bg-green-300 m-2'>
        Register
      </Link>
      <Link to='/login' className='p-2 px-4 bg-blue-300 m-2'>
        Login
      </Link>
    </div>
  );
};

export default Landing;
