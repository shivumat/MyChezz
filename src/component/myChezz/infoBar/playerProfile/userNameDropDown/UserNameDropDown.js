import React from "react";
import chessDotComLogo from "../../../../../static/images/chessDotComLogo.png";
import search from "../../../../../static/images/search.png";
import "./UserNameDropDown.css";

function UserNameDropDown(props) {
  return (
    <div className={"searchUser"}>
      <div className={"userNameInput"}>
        <img className={"chessDotComLogo"} src={chessDotComLogo} />
      </div>
      <div className={"userNameInput"}>
        <input className={"userTextInput"} type={"text"} />
      </div>
      <div className={"userNameInput"}>
        <button className={"searchButton"} type="submit">
          <img className={"searchIcon"} src={search} />
          <span className={"userNameSubmit"}>Submit</span>
        </button>
      </div>
    </div>
  );
}

export default UserNameDropDown;
