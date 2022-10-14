import { useState } from "react";
import { useFormik } from "formik";
//components
import SelectInput from "./SelectInput.components";

const SignupForm = () => {
  const showNextInputs = () => setSignupShowInputs(signupShowInputs + 1);
  const [signupShowInputs, setSignupShowInputs] = useState(1); //track at which stage of signup to show relevant inputs
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
      age: "",
      country: { selectedOption: "Lebanon" },
      phonenb: "",
    },
    onSubmit: (values) => console.log(values),
  });
  console.log(formik.values);

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col w-3/4 gap-2">
      {signupShowInputs === 1 && (
        <>
          <input value={formik.values.email} onChange={formik.handleChange} className="input" name="email" type="email" placeholder="email" />
          <input value={formik.values.password} onChange={formik.handleChange} className="input" name="password" type="password" placeholder="password" />
          <button className="btn" onClick={showNextInputs}>
            Agree & Join
          </button>
        </>
      )}
      {signupShowInputs === 2 && (
        <>
          <input value={formik.values.name} onChange={formik.handleChange} className="input" name="name" type="text" placeholder="name" />
          <input value={formik.values.age} onChange={formik.handleChange} className="input" name="age" type="number" placeholder="age" />
          <button className="btn" onClick={showNextInputs}>
            Continue
          </button>
        </>
      )}
      {signupShowInputs === 3 && (
        <>
          <SelectInput formik={formik} />
          <input value={formik.values.phonenb} onChange={formik.handleChange} className="input" name="phonenb" type="text" placeholder="phonenb" />
          <button className="btn" type="submit">
            Submit
          </button>
        </>
      )}
    </form>
  );
};
export default SignupForm;
