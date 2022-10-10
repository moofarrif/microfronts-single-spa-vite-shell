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
            to="app2/a"
          >
            Page a
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link  ${isActive ? "active" : ""}`
            }
            to="app2/b"
          >
            Page b
          </NavLink>
        </li>
      </ul>

      <Outlet />
    </div>
  );
};
