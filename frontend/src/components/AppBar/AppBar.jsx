import { useState, useEffect, useRef } from "react";
import "./AppBar.css";

const AppBar = ({ toggleSidebar, auth }) => {
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header className="app-bar">
      <div className="group">
        <button className="toggle-app-bar" onClick={toggleSidebar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.8rem"
            height="1.8rem"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-menu"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 8l16 0" />
            <path d="M4 16l16 0" />
          </svg>
        </button>
        <button className="search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-search"
            width="1.35rem"
            height="1.35rem"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx={10} cy={10} r={7} />
            <line x1={21} y1={21} x2={15} y2={15} />
          </svg>
        </button>
      </div>
      <div ref={dropdownRef} className="relative">
        <button
          className="profile"
          onClick={(e) => {
            e.stopPropagation();
            setDropdown(!dropdown);
          }}
        >
          <img className="avatar" />
        </button>
        <div className={`dropdown-menu ${dropdown ? "active" : ""}`}>
          <div className="dropdown-header">
            <p className="user-name">{auth.username}</p>
            <p className="user-email">{auth.nama_petugas}</p>
          </div>
          <div className="dropdown-divider" />
          <a href="#" className="dropdown-item">
            <svg width={16} height={16} viewBox="0 0 16 16" fill="none">
              <path
                d="M8 8C9.933 8 11.5 6.433 11.5 4.5C11.5 2.567 9.933 1 8 1C6.067 1 4.5 2.567 4.5 4.5C4.5 6.433 6.067 8 8 8Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M2 14C2 11.239 4.239 9 7 9H9C11.761 9 14 11.239 14 14"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
            Profile
          </a>
          <a href="#" className="dropdown-item">
            <svg width={16} height={16} viewBox="0 0 16 16" fill="none">
              <path
                d="M7 14H3C2.44772 14 2 13.5523 2 13V3C2 2.44772 2.44772 2 3 2H7"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M10 11L14 8L10 5"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path d="M14 8H6" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            Log out
          </a>
        </div>
      </div>
    </header>
  );
};

export default AppBar;
