import "./ServiceCard.css";
import { FaArrowRight } from "react-icons/fa"; //icons
import { Link } from "react-router-dom";
function ServiceCard(props) {
  return (
    <>
      <div className="card">
        <h2>{props.heading}</h2>
        <h3>
          {props.price}
          <span>montly</span>
        </h3>
        <p>per subscriber per year</p>
        <ul>
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
            Static responsive website
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
            Static responsive website
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
            Static responsive website
          </li>
        </ul>
        <Link to="/MainContact">
          Purchase Now{" "}
          <span>
            {" "}
            <FaArrowRight />
          </span>
        </Link>
      </div>
    </>
  );
}

export default ServiceCard;
