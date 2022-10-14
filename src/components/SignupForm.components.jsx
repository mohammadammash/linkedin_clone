import { useState } from "react";
//components
import SelectInput from "./SelectInput.components";

const SignupForm = () => {
  const showNextInputs = () => setSignupShowInputs(signupShowInputs + 1);
  const [signupShowInputs, setSignupShowInputs] = useState(1); //track at which stage of signup to show relevant inputs

  return (
    <form className="flex flex-col w-3/4 gap-2">
      {signupShowInputs === 1 && (
        <>
          <input className="border border-black h-10 rounded-sm" name="email" type="email" placeholder="email" />
          <input className="border border-black h-10 rounded-sm" name="password" type="password" placeholder="password" />
          <button className="btn" onClick={showNextInputs}>
            Agree & Join
          </button>
        </>
      )}
      {signupShowInputs === 2 && (
        <>
          <input name="name" type="text" placeholder="name" />
          <input name="age" type="age" placeholder="age" />
          <button className="btn" onClick={showNextInputs}>
            Continue
          </button>
        </>
      )}
      {signupShowInputs === 3 && (
        <>
          <SelectInput />
          <input name="phone"/>
          <button className="btn" type="submit">
            Submit
          </button>
        </>
      )}
    </form>
  );
};
export default SignupForm;
