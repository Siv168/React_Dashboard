import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cloneElement } from "react";
import {
  faGlobe,
  faChartSimple,
  faFileInvoice,
  faUser,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";

const link = [
  {
    name: "Dashboard",
    path: "/",
    icon: <FontAwesomeIcon icon={faChartSimple} className="mr-2 text-[24px]" />,
  },
  {
    name: "Invoice",
    path: "/invoice",
    icon: <FontAwesomeIcon icon={faFileInvoice} className="mr-2 text-[24px]" />,
  },
  {
    name: "Customer",
    path: "/customer",
    icon: <FontAwesomeIcon icon={faUser} className="mr-2 text-[24px]" />,
  },
];

function Sidebar() {
  return (
    <div className="fixed top-0 left-0 right-0 md:bottom-0 md:left-0 md:w-63 md:h-screen text-white flex flex-col md:py-4 px-2 z-50 bg-white md:bg-transparent shadow-md md:shadow-none">
      {/* Logo - Hidden on mobile */}
      <div className="md:flex f md:h-35 h-17 bg-blue-600 text-lg rounded-md md:items-end items-center px-4 md:pb-5">
        <h2>
          <FontAwesomeIcon
            icon={faGlobe}
            className="md:text-[42px] text-xl flex transform rotate-15"
          />
        </h2>
        <span className="text-5xl font-[lusitana]">Acme</span>
      </div>

      <nav className="mt-0 md:mt-2 flex-grow flex flex-row md:flex-col font-[inter]">
        <div className="flex flex-row md:flex-col flex-nowrap justify-around md:justify-start gap-2 w-full h-auto">
          {link.map((links, key) => (
            <NavLink
              key={key}
              to={links.path}
              className={({ isActive }) =>
                `mt-3 md:mt-0 flex flex-1 md:flex-none items-center justify-center md:justify-start gap-2 p-2 md:p-4 font-semibold text-black bg-gray-50 h-12 md:h-14 ${
                  isActive
                    ? "text-blue-400 rounded-sm"
                    : "hover:bg-blue-100 hover:text-blue-400 rounded-sm transition-all duration-300"
                }`
              }
              end
            >
              <p>{cloneElement(links.icon, { className: "md:mr-2 text-[24px]" })}</p>
              <p className="hidden md:block">{links.name}</p>
            </NavLink>
          ))}
        </div>

        {/* Separator */}
        <div className="bg-gray-50 hidden md:block flex-grow"></div>

        {/* Logout Button */}
        <NavLink
          to="/"
          className="mt-3 md:mt-0 flex flex-1 md:flex-none items-center justify-center md:justify-start gap-2 p-2 md:p-4 font-semibold rounded-sm text-black bg-gray-50 hover:bg-blue-100 hover:text-blue-400 md:rounded-sm transition-all duration-300 h-12 md:h-14"
          end
        >
          <FontAwesomeIcon icon={faPowerOff} className="md:mr-2 text-[24px] " />
          <p className="hidden md:block">Logout</p>
        </NavLink>
      </nav>
    </div>
  );
}

export default Sidebar;