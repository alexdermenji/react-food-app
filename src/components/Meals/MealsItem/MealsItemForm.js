import classes from "./MealsItemForm.module.css";
import Input from "../../UI/Input";

const MealsItemForm = (props) => {
  return (
    <form className={classes.form}>
      <Input
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
    </form>
  );
};

export default MealsItemForm;
