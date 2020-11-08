import React from "react";

// navbar
import NavBar from "../../NavBar/NavBar";

// css
import "../../../assets/css/everything.css";

function MechHeader() {
  return (
    <section className="mechHeader__header">
      <NavBar />
      <div className="mechHeader__container">
        <div className="mechHeader__shortDescription">
          Mech is a community for car owners where users can register an
          account, save their car make and model, and search diagnostic trouble
          codes (DTC). After performing the DTC search, users can chat
          Reddit-style with other car owners for potential solutions.
        </div>
        <div className="mechHeader__spacing1"></div>
      </div>
    </section>
  );
}
export default MechHeader;
