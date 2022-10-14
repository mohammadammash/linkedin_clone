import { useState } from "react";
//components
import Input from "./Input.components";

const SignupForm = () => {
  const showNextInputs = () => setSignupShowInputs(signupShowInputs + 1);
  const [signupShowInputs, setSignupShowInputs] = useState(1); //track at which stage of signup to show relevant inputs

  return (
    <form>
      {signupShowInputs === 1 && (
        <>
          <Input type={"email"} />
          <Input type={"password"} />
          <button className="btn" onClick={showNextInputs}>
            Agree & Join
          </button>
        </>
      )}
      {signupShowInputs === 2 && (
        <>
          <Input type={"name"} />
          <Input type={"age"} />
          <button className="btn" onClick={showNextInputs}>
            Continue
          </button>
        </>
      )}
      {signupShowInputs === 3 && (
        <>
          <Input type={"country"} />
          <Input type={"phonenb"} />
          <button className="btn" type="submit">
            Submit
          </button>
        </>
      )}
    </form>
  );
};
export default SignupForm;
