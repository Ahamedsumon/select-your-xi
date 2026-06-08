import navImage from "../../assets/logo.png";
import coinImage from "../../assets/coin.png";

const Header = ({ availableBalance }) => {
  return (
    <div className="navbar max-w-[1200px] mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-30 p-2 shadow"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Fixture</a>
            </li>
            <li>
              <a>Teams</a>
            </li>
            <li>
              <a>Schedule</a>
            </li>
          </ul>
        </div>
        <img src={navImage} alt="" />
      </div>
      <div className="navbar-end hidden lg:flex text-center">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Fixture</a>
          </li>
          <li>
            <a>Teams</a>
          </li>
          <li>
            <a>Schedules</a>
          </li>
        </ul>
        <a className="btn ">
          <span className="totalAmount">{availableBalance}</span> Coin{" "}
          <span>
            <img src={coinImage} alt="" />
          </span>
        </a>
      </div>
      <div className="navbar-end lg:hidden">
        <a className="btn">
          <span className="totalAmount">{availableBalance}</span> Coin{" "}
          <span>
            <img src={coinImage} alt="" />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Header;
