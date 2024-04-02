import links from "../utils/links";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <div className='navlinks text-slate-100 text-sm font-medium '>
      {links.map((link) => {
        const { text, path, icon } = link;
        return (
          <NavLink
            to={path}
            key={text}
            className={({ isActive }) =>
              isActive
                ? "flex justify-start items-center bg-slate-700"
                : "flex justify-start items-center hover:bg-slate-700"
            }
            end={path != "incidents"}
          >
            <span className='p-2'>{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
