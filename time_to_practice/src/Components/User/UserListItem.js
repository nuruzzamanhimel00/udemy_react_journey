import React from "react";
import style from "./UserListItem.module.css";

const UserListItem = (props) => {
  const deleteUserlistHandler = () => {
    props.onDelete(props.user.id);
  };
  return (
    <>
      <li>
        <div className={style["list-item"]}>
          <div>
            {props.user.name} (Age: {props.user.age}){" "}
          </div>
          <div>
            <button onClick={deleteUserlistHandler}>Delete</button>
          </div>
        </div>
      </li>
    </>
  );
};

export default UserListItem;
