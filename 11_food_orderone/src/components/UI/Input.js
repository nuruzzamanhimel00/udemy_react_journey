import classes from "./Input.module.css";
import { forwardRef } from "react";

const Input = forwardRef(function (props, ref) {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

// const Input = (props) => {
//   return (
//     <div className={classes.input}>
//       <label htmlFor={props.input.id}>{props.label}</label>
//       <input {...props.input} />
//     </div>
//   );
// };

export default Input;
