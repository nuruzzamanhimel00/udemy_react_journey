import React from "react";
import style from "./UserListItem.module.css";

const UserListItem = (props) => {
  return (
    <>
      <li>
        <div className={style["list-item"]}>
          <div>
            {props.user.name} (Age: {props.user.age}){" "}
          </div>
          <div>
            <button>Delete</button>
          </div>
        </div>
      </li>
    </>
  );
};

export default UserListItem;
