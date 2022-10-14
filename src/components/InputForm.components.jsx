import Input from "../components/Input.components";
import Button from "../components/Button.components";

const InputForm = (props) => {
  const { type } = props;
  if (type === "login") {
    return (
      <form>
        <Input type={"email"} />
        <Input type={"password"} />
        <Input type={"name"} />
        <Input type={"age"} />
        <Input type={"country"} />
        <Input type={"phonenb"} />
        <Button btn_class={"w-3/4 h-12 rounded-3xl bg-blue text-white"} text={"Agree & Join"} />
      </form>
    );
  }
};

export default InputForm;
