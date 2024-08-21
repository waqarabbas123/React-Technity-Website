import "./ServiceCard.css";
import { FaArrowRight } from "react-icons/fa"; //icons
import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
function ServiceCard({ heading, price, base }) {
  return (
    <>
      <div className="card">
        <h2>{heading}</h2>
        <h3>
          {price}
          <span>{base}</span>
        </h3>
        <p>per subscriber per year</p>
        <ul>
          <li>
            <span>
              <FaArrowRight />
            </span>
            Static Designing website
          </li>
          <li>
            <span>
              <FaArrowRight />
            </span>
            Static responsive website
          </li>
          <li>
            <span>
              <FaArrowRight />
            </span>
            Static Atractive website
          </li>
          <li>
            <span>
              <FaArrowRight />
            </span>
            Social Media Marketing
          </li>
          <li>
            <span>
              <FaArrowRight />
            </span>
            Static Landing Pages
          </li>
          <li>
            <span>
              <FaArrowRight />
            </span>
            Static Android Platforms
          </li>
        </ul>
        <Link to="/MainContact">
          Purchase Now
          <span>
            <FaArrowRight />
          </span>
        </Link>
      </div>
    </>
  );
}

export default ServiceCard;
