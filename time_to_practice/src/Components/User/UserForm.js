import React from "react";
import Button from "../UI/Button.js";
import style from "./UserForm.module.css";
import Card from "../UI/Card.js";
const UserForm = () => {
  return (
    <>
      <div className={style["user-section"]}>
        <Card>
          {/* <div className={style.card}> */}
          <div className="card-body">
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Name</label> <br />
                <input type="text" name="name" />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Age</label> <br />
                <input type="number" name="age" />
              </div>
              <div class="form-group">
                <Button />
              </div>
            </form>
          </div>
        </Card>
      </div>
    </>
  );
};

export default UserForm;
