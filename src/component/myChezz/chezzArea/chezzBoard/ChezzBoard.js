import React from "react";
import Chessboard from "chessboardjsx";
import "./ChezzBoard.css";

function ChezzBoard(props) {
  const calculateBoardWidth = (param) => {
    let { screenWidth, screenHeight } = param;
    if (screenWidth > screenHeight * 0.85) {
      return screenHeight * 0.85;
    } else {
      return screenWidth;
    }
  };
  return (
    <div className="ChezzBoard">
      <Chessboard
        className="mainBoard"
        calcWidth={calculateBoardWidth}
        darkSquareStyle={{ backgroundColor: "#2F4F4F" }}
        lightSquareStyle={{ backgroundColor: "#BBC5C5" }}
        {...props}
      />
    </div>
  );
}

export default ChezzBoard;
