import Input from "./Input.components.jsx";
import Button from "./Button.components";

const SigninForm = () => {
  return (
    <div>
      <form>
        <Input type={"email"} />
        <Input type={"password"} />
        <Button type="submit" text="Submit" />
      </form>
    </div>
  );
};

export default SigninForm;
