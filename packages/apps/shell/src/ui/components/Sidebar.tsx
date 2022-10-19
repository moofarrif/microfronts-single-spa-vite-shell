import { NavLink } from "react-router-dom";

type Props = {};

export const Sidebar = (props: Props) => {
  return (
    <div style={{ width: "20%", background: "#d3bccc" }}>
      <NavLink
        className={({ isActive }) =>
          `nav-item nav-link  ${isActive ? "active" : ""}`
        }
        to="/app1"
      >
        App1-React
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          `nav-item nav-link  ${isActive ? "active" : ""}`
        }
        to="/app2"
      >
        App2-React
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          `nav-item nav-link  ${isActive ? "active" : ""}`
        }
        to="/app3"
      >
        App3-Angular
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `nav-item nav-link  ${isActive ? "active" : ""}`
        }
        to="/app4"
      >
        App4-Angular
      </NavLink>
    </div>
  );
};
