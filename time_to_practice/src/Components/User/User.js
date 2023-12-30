import React, { useState } from "react";
import style from "./User.module.css";
import UserForm from "./UserForm.js";
import UserList from "./UserList.js";

const User = () => {
  const [userList, setUserList] = useState([]);

  const getUserListHandler = (data) => {
    setUserList((prevData) => [data, ...prevData]);
    // console.log(data);
  };
  return (
    <>
      <div className={style["main-section"]}>
        <div className={style.main_section_inner}>
          <UserForm onGetUserList={getUserListHandler} />
          {/* user list */}
          <UserList userList={userList} />
        </div>
      </div>
    </>
  );
};

export default User;
