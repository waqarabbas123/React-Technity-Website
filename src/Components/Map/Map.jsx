import React from "react";
import "./Map.css";
function Map() {
  return (
    <>
      <div className="responsive-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d498.5888708693874!2d74.33104497855676!3d35.9118959855887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e6499778eb7513%3A0x73cc766821cc3062!2sSHAN%20HARDWARES%2C%20Plywood%20and%20Paint%20Store!5e1!3m2!1sen!2s!4v1718903229951!5m2!1sen!2s"
        
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}

export default Map;
