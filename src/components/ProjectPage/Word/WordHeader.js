import React from "react";

// navbar
import NavBar from "../../NavBar/NavBar";

// css
import "../../../assets/css/everything.css";

function WordHeader() {
  return (
    <section className="wordHeader__header">
      <NavBar />
      <div className="wordHeader__container">
        <div className="wordHeader__shortDescription">
          Word helps users acquire a better understanding and feeling of words
          through a sentiment score using definitions, poems, lyrics, and
          videos.
        </div>
        <div className="wordHeader__spacing1"></div>
      </div>
    </section>
  );
}
export default WordHeader;
