import BigSideBar from "../components/BigSideBar";
import TopBar from "../components/TopBar";
import { Outlet } from "react-router-dom";
const Dashboard = () => {
  return (
    <div className='wrapper'>
      <div className='container flex min-h-screen min-w-full bg-white'>
        <BigSideBar />
        <div className='w-full'>
          <TopBar />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
