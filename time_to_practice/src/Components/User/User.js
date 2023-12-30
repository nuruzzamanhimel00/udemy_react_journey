import React from "react";
import style from "./User.module.css";
import UserForm from "./UserForm.js";

const User = () => {
  return (
    <>
      <div className={style["main-section"]}>
        <div className={style.main_section_inner}>
          <UserForm />
          {/* <div className={style["user-section"]}>
            <div className={style.card}>
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
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default User;
