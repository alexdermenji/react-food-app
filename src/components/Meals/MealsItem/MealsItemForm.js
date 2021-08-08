import classes from "./MealsItemForm.module.css";
import Input from "../../UI/Input";
import { useRef, useState } from "react";

const MealsItemForm = (props) => {
  const [amountIsvalid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        input={{
          id: "amount_" + props.id,
          type: "text",
          min: "0",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
        label="amount"
      />
      <button>+ Add</button>
      {!amountIsvalid && <p>Please enter valid amount</p>}
    </form>
  );
};

export default MealsItemForm;
