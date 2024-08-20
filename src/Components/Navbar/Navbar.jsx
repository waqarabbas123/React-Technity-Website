import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
// -------------icons-----
import { AiOutlineMenu } from "react-icons/ai";
import { FaAngleDown } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";
import { FaTimes } from "react-icons/fa";

function Navbar() {
  const [servicehover, setservicehover] = useState(false);
  const [portfoliohover, setportfoliohover] = useState(false);
  const [bloghover, setbloghover] = useState(false);
  const [pagehover, setpagehover] = useState(false);

  const navListRef = useRef();
  const openListRef = useRef();
  const closeBtnRef = useRef();

  const clickList = () => {
    if (navListRef.current) {
      navListRef.current.style.display = "block";
      openListRef.current.style.display = "none";
      closeBtnRef.current.style.display = "block";
    }
  };

  const clickClose = () => {
    if (openListRef.current) {
      navListRef.current.style.display = "none";
      closeBtnRef.current.style.display = "none";
      openListRef.current.style.display = "block";
    }
  };

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
          <ul ref={navListRef}>
            <li>
              <Link className="active " to="/">
                Home
              </Link>
            </li>

            <li>
              <Link to="/MainAbout">About</Link>
            </li>

            <li>
              <Link
                onMouseEnter={() => setservicehover(true)}
                onMouseLeave={() => setservicehover(false)}
                to=""
              >
                Services <FaAngleDown />
              </Link>
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
            <div className="bar" ref={openListRef} onClick={clickList}>
              <AiOutlineMenu />
            </div>
            <div className="close" ref={closeBtnRef} onClick={clickClose}>
              <FaTimes />
            </div>
          </div>
        </nav>

        {/* ------services---- */}
        {servicehover && (
          <div
            onMouseEnter={() => setservicehover(true)}
            onMouseLeave={() => setservicehover(false)}
            className="popService"
          >
            <ul>
              <li>
                <Link to="/Services">
                  <IoMdArrowDropright /> services
                </Link>
              </li>
              <li>
                <Link to="/servicedetail">
                  <IoMdArrowDropright /> services details
                </Link>
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
                <Link to={"/Webdevelopment"}>
                  <IoMdArrowDropright /> web development
                </Link>
              </li>
              <li>
                <Link to="/vedioEdit">
                  <IoMdArrowDropright /> vedio editing
                </Link>
              </li>
              <li>
                <Link to="/AppDevelopment">
                  <IoMdArrowDropright /> App Development
                </Link>
              </li>
              <li>
                <Link to="/aiPage">
                  <IoMdArrowDropright /> artificial intelligence
                </Link>
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
                <Link to="/MainContact">
                  <IoMdArrowDropright /> contact
                </Link>
              </li>
              <li>
                <Link to="/Mainteam">
                  <IoMdArrowDropright /> team
                </Link>
              </li>
              <li>
                <Link to="/TeamDetail">
                  <IoMdArrowDropright /> team details
                </Link>
              </li>
              <li>
                <a href="#">
                  <IoMdArrowDropright /> our History
                </a>
              </li>
              <li>
                <Link to="/OurMission">
                  <IoMdArrowDropright /> our mission
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
