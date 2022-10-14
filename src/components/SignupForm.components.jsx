import { useState } from "react";
//components
import Input from "./Input.components";
import Button from "./Button.components";

const SignupForm = () => {
  const showNextInputs = () => setSignupShowInputs(signupShowInputs + 1);
  const [signupShowInputs, setSignupShowInputs] = useState(1); //track at which stage of signup to show relevant inputs

  return (
    <form>
      {signupShowInputs === 1 && (
        <>
          <Input type={"email"} />
          <Input type={"password"} />
          <Button text="Agree & Join" showNextInputs={showNextInputs} />
        </>
      )}
      {signupShowInputs === 2 && (
        <>
          <Input type={"name"} />
          <Input type={"age"} />
          <Button text="Continue" showNextInputs={showNextInputs} />
        </>
      )}
      {signupShowInputs === 3 && (
        <>
          <Input type={"country"} />
          <Input type={"phonenb"} />
          <Button type="submit" text="Submit" />
        </>
      )}
    </form>
  );
};

export default SignupForm;
