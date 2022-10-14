import { useState } from "react";
//components
import Input from "../components/Input.components";
import Button from "../components/Button.components";

const InputForm = ({ type }) => {
  const showNextInputs = () => setLoginShowInputs(loginshowInputs+1);
  const [loginshowInputs, setLoginShowInputs] = useState(1); //track at which stage of signup to show relevant inputs

  if (type === "login") {
    return (
      <form>
        {loginshowInputs === 1 && (
          <>
            <Input type={"email"} />
            <Input type={"password"} />
            <Button text="Agree & Join" showNextInputs={showNextInputs} />
          </>
        )}
        {loginshowInputs === 2 && (
          <>
            <Input type={"name"} />
            <Input type={"age"} />
            <Button text="Continue" showNextInputs={showNextInputs}/>
          </>
        )}
        {loginshowInputs === 3 && (
          <>
            <Input type={"country"} />
            <Input type={"phonenb"} />
            <Button type="submit" text="Submit"/>
          </>
        )}
      </form>
    );
  }
};

export default InputForm;
