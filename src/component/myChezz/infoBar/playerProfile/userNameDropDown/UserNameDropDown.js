import React, { useState } from "react";
import chessDotComLogo from "../../../../../static/images/chessDotComLogo.png";
import search from "../../../../../static/images/search.png";
import "./UserNameDropDown.css";

function UserNameDropDown(props) {
  const [userName, setUserName] = useState("");

  const onUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const submitUserName = (e) => {
    updateUserName();
  };

  const handleOnEnter = (e) => {
    if (e.key === "Enter") {
      updateUserName();
    }
  };

  const updateUserName = () => {
    props.updateUserName(userName);
    setUserName("");
  };

  return (
    <div className={"searchUser"}>
      <div className={"userNameInput"}>
        <img className={"chessDotComLogo"} src={chessDotComLogo} />
      </div>
      <div className={"userNameInput"}>
        <input
          className={"userTextInput"}
          type={"text"}
          placeholder={"Seach Player"}
          value={userName}
          onChange={onUserNameChange}
          onKeyUp={handleOnEnter}
        />
      </div>
      <div className={"userNameInput"}>
        <button
          className={"searchButton"}
          type="submit"
          onClick={submitUserName}
        >
          <img className={"searchIcon"} src={search} />
          <span className={"userNameSubmit"}>Submit</span>
        </button>
      </div>
    </div>
  );
}

export default UserNameDropDown;
