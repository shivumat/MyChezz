import React from "react";
import "./PlayTabs.css";

function PlayTabs(props) {
  function openCity(evt) {
    var i, tabcontent, tablinks;
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    evt.currentTarget.className += " active";
  }

  return (
    <div className="PlayTabs">
      <div>
        <button className="tablinks" onClick={openCity}>
          London
        </button>
      </div>
      <div>
        <button className="tablinks" onClick={openCity}>
          Paris
        </button>
      </div>
      <div>
        <button className="tablinks" onClick={openCity}>
          Tokyo
        </button>
      </div>
    </div>
  );
}

export default PlayTabs;
