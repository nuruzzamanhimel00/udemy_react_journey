import style from "./Card.module.css";

const Card = (props) => {
  const classes = props.className;
  return (
    <>
      <div className={`${classes} ${style.card}`}>{props.children}</div>
    </>
  );
};

export default Card;
