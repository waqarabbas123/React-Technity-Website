import "./MainServices.css";
import Services from "../../Components/services/Services";
import ServiceCard from "../../Components/ServiceCard/ServiceCard";


function MainServices() {
  
  return (
    <div>
      <div className="main-service">
        {/* ------------------ serives-home ------------- */}
        <div className="service-home">
          <h2>Services</h2>
          <p>
            <span className="ser-home">Home</span>

            <span className="ser-servies">Services</span>
          </p>
        </div>
        {/* ----------------second portion of services------------ */}
        <div className="sevice-second-portion">
          <Services />
        </div>
        {/* ------------------third portion of services----------- */}
        <div className="serv-third">
          <div className="serv-content">
            <div className="content-first">
              <h3>Pricing & Packaging</h3>
              <h2>
                Providing best <br />
                pricing for client
              </h2>
            </div>

            <div className="content-btn">
              <button className="Monthly">Monthly</button>
              <button className="Yearly">Yearly</button>
            </div>
          </div>
          <div className="service-cards">
            <ServiceCard heading="Standard" price="$29/" base="Daily" />
            <ServiceCard heading="Professional" price="$199/" base="Monthly" />
            <ServiceCard heading="Ultimate" price="$299/" base="Yearly" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainServices;
