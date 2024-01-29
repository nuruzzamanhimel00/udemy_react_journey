import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <p>Cart</p>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} />
      </div>
    </>
  );
};

export default Header;
