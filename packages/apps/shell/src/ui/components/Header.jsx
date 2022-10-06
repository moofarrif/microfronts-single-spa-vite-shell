import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/context/AuthContext";

export const Header = () => {
  const { user, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const onLogout = () => {
    logout();
    navigate("/login", {
      replace: true,
    });
  };

  return (
    <nav
      className="navbar"
      style={{
        background: "#2E0063",
        padding: "2rem",
        color: "white",
        height: "10vh",
      }}
    >
      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <span className=" mx-5">{user?.name}</span>

        <button
          className="nav-link btn btn-primary text-light"
          onClick={onLogout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};
