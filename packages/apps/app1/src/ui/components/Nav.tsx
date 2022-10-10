import React from "react";
import { NavLink, Outlet } from "react-router-dom";

type Props = {};

export const Nav = (props: Props) => {
  return (
    <div>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link  ${isActive ? "active" : ""}`
            }
            to="app1/a"
          >
            Page a
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link  ${isActive ? "active" : ""}`
            }
            to="app1/b"
          >
            Page b
          </NavLink>
        </li>

        {/* otra apps */}
        <li>
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link  ${isActive ? "active" : ""}`
            }
            to="app3/a"
          >
            go to Angular 3 page a
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link  ${isActive ? "active" : ""}`
            }
            to="app4/a"
          >
            go to Angular 4 page a
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
