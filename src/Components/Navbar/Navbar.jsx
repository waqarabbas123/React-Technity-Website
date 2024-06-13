import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
// -------------icons-----
import { AiOutlineMenu } from "react-icons/ai";
import { FaAngleDown } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";

function Navbar() {
  const [homehover, setHomeHover] = useState(false);
  const [servicehover, setservicehover] = useState(false);
  const [portfoliohover, setportfoliohover] = useState(false);
  const [bloghover, setbloghover] = useState(false);
  const [pagehover, setpagehover] = useState(false);

  return (
    <>
      <div className="outer">
        <nav>
          <div className="logo">
            <h2>
              Tech<span>Nity</span>
            </h2>
            <p>Make IT</p>
          </div>
          {/* ----------------------------- */}
          <ul>
            <li>
              <Link
                onMouseEnter={() => setHomeHover(true)}
                onMouseLeave={() => setHomeHover(false)}
                className="active "
                to="/"
              >
                Home <FaAngleDown />
              </Link>
            </li>

            <li>
              <Link to="/MainAbout">About</Link>
            </li>

            <li>
              <a
                onMouseEnter={() => setservicehover(true)}
                onMouseLeave={() => setservicehover(false)}
                href="#"
              >
                Services <FaAngleDown />
              </a>
            </li>

            <li>
              <a
                onMouseEnter={() => setportfoliohover(true)}
                onMouseLeave={() => setportfoliohover(false)}
                href="#"
              >
                Portfoio <FaAngleDown />
              </a>
            </li>

            <li>
              <a
                onMouseEnter={() => setbloghover(true)}
                onMouseLeave={() => setbloghover(false)}
                href="#"
              >
                Blog <FaAngleDown />
              </a>
            </li>

            <li>
              <a
                onMouseEnter={() => setpagehover(true)}
                onMouseLeave={() => setpagehover(false)}
                href="#"
              >
                Pages <FaAngleDown />
              </a>
            </li>
          </ul>
          <div className="icon">
            <AiOutlineMenu />
          </div>
        </nav>
        {/* --------popups------ */}
        {homehover && (
          <div
            onMouseEnter={() => setHomeHover(true)}
            onMouseLeave={() => setHomeHover(false)}
            className="popHome"
          >
            <ul>
              <li>
                <Link to="/mainhome">
                  <IoMdArrowDropright /> Services plus
                </Link>
              </li>
              <li>
                <a href="#">
                  <IoMdArrowDropright /> Privacy policy
                </a>
              </li>
              <li>
                <a href="#">
                  <IoMdArrowDropright /> merketing agency
                </a>
              </li>
              <li>
                <a href="#">
                  <IoMdArrowDropright /> freelancer agency
                </a>
              </li>
              <li>
                <a href="#">
                  <IoMdArrowDropright /> personal agency
                </a>
              </li>
              <li>
                <a href="#">
                  <IoMdArrowDropright /> creative soluiton
                </a>
              </li>
              <li>
                <a href="#">
                  <IoMdArrowDropright /> showcase Portfoio
                </a>
              </li>
              <li>
                <a href="#">
                  <IoMdArrowDropright /> vedio agency
                </a>
              </li>
            </ul>
          </div>
        )}
        {/* ------services---- */}
        {servicehover && (
          <div
            onMouseEnter={() => setservicehover(true)}
            onMouseLeave={() => setservicehover(false)}
            className="popService"
          >
            <ul>
              <li>
                <a href="#">
                  <IoMdArrowDropright /> services
                </a>
              </li>
              <li>
                <a href="#">
                  <IoMdArrowDropright /> services details
                </a>
              </li>
            </ul>
          </div>
        )}
        {/* -------------portfolio------- */}
        {portfoliohover && (
          <div
            onMouseEnter={() => setportfoliohover(true)}
            onMouseLeave={() => setportfoliohover(false)}
            className="popPortfolio"
          >
            <ul>
              <li>
                <a href="#">
                  <IoMdArrowDropright /> web development
                </a>
              </li>
              <li>
                <a href="#">
                  <IoMdArrowDropright /> vedio editing
                </a>
              </li>
            </ul>
          </div>
        )}
        {/* -------------blog------- */}
        {bloghover && (
          <div
            onMouseEnter={() => setbloghover(true)}
            onMouseLeave={() => setbloghover(false)}
            className="popBlog"
          >
            <ul>
              <li>
                <a href="#">
                  <IoMdArrowDropright /> Blog
                </a>
              </li>
              <li>
                <a href="#">
                  <IoMdArrowDropright /> blog details
                </a>
              </li>
            </ul>
          </div>
        )}
        {/* -------------page------- */}
        {pagehover && (
          <div
            onMouseEnter={() => setpagehover(true)}
            onMouseLeave={() => setpagehover(false)}
            className="popPage"
          >
            <ul>
              <li>
                <a href="/">
                  <IoMdArrowDropright /> contact
                </a>
              </li>
              <li>
                <a href="/">
                  <IoMdArrowDropright /> team
                </a>
              </li>
              <li>
                <a href="#">
                  <IoMdArrowDropright /> team details
                </a>
              </li>
              <li>
                <a href="#">
                  <IoMdArrowDropright /> our history
                </a>
              </li>
              <li>
                <a href="#">
                  <IoMdArrowDropright /> our mission
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
