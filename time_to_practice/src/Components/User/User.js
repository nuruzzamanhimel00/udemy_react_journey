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
  const onDeleteHandler = (id) => {
    let user_list = userList.filter((user) => user.id !== id);
    setUserList(user_list);
    // console.log("id main", id);
  };
  return (
    <>
      <div className={style["main-section"]}>
        <div className={style.main_section_inner}>
          <UserForm onGetUserList={getUserListHandler} />
          {/* user list */}
          <UserList userList={userList} onDelete={onDeleteHandler} />
        </div>
      </div>
    </>
  );
};

export default User;
