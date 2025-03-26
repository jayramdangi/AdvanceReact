import React from 'react';
import { NavLink } from 'react-router';

const Sidebar = () => {
  return (
    <div className="flex flex-col overflow-y-scroll w-40 h-150">
      <NavLink
        className={({ isActive }) =>
          `text-pink-300 ${isActive ? 'bg-black text-white' : ''}`
        }
        to="/home"
        end={false} // Keeps Home active when navigating to nested routes
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `text-pink-300 ${isActive ? 'bg-black text-white' : ''}`
        }
        to="/shorts"
      >
        Shorts
      </NavLink>
      <NavLink>
        Subscriptions
      </NavLink>
    </div>
  );
};

export default Sidebar;
