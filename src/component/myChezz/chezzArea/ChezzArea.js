import React from "react";
import "./ChezzArea.css";
import ChezzBoard from "./chezzBoard/ChezzBoard";
import PlayTabs from "./playTabs/PlayTabs";

function ChezzArea(props) {
  return (
    <div className="ChezzArea">
      <ChezzBoard position="start" />
      <PlayTabs />
      <PlayTabs />
    </div>
  );
}

export default ChezzArea;
