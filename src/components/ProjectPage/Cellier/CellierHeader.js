import React from "react";

// navbar
import NavBar from "../../NavBar/NavBar";

// css
import "../../../assets/css/everything.css";

function CellierHeader() {
  return (
    <section className="cellierHeader__header">
      <NavBar />
      <div className="cellierHeader__container">
        <div className="cellierHeader__shortDescription">
          Cellier is a search tool that helps people find different distributors
          of essential oils, fragrance oils, absolutes, and waxes. It will also
          recommend oils that mix well with others based on a fragrance wheel.
        </div>
        <div className="cellierHeader__spacing1"></div>
      </div>
    </section>
  );
}
export default CellierHeader;
