import React from "react";
import Card from "../UI/Card.js";
import style from "./UserList.module.css";
import UserListItem from "./UserListItem.js";

const UserList = (props) => {
  let listContent = (
    <li>
      <p> Data not found</p>
    </li>
  );
  if (props.userList.length > 0) {
    listContent = props.userList.map((user) => (
      <UserListItem key={user.id} user={user} />
    ));
  }

  return (
    <>
      <div>
        <Card>
          <div className="card-body">
            <div className={style["user-list"]}>
              <ol>{listContent}</ol>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default UserList;
