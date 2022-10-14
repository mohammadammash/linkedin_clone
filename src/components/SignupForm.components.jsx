import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
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
    validationSchema: Yup.object({
      email: Yup.string("Invalid").required("Required"),
      password: Yup.string().required("Required"),
      name: Yup.string().required("Required"),
      age: Yup.string().required("Required"),
      phonenb: Yup.string().required("Required"),

    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col w-3/4 gap-2">
      {signupShowInputs === 1 && (
        <>
          <input value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} className="input" name="email" type="email" placeholder="email" />
          {formik.touched.email && formik.errors.email && <p className="text-red-500">{formik.errors.email}</p>}

          <input value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} className="input" name="password" type="password" placeholder="password" />
          {formik.touched.password && formik.errors.password && <p className="text-red-500">{formik.errors.password}</p>}

          <button className="btn" onBlur={formik.handleBlur} onClick={showNextInputs} disabled={!formik.values.email || !formik.values.password}>
            Agree & Join
          </button>
        </>
      )}

      {signupShowInputs === 2 && (
        <>
          <input value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} className="input" name="name" type="text" placeholder="name" />
          {formik.touched.name && formik.errors.name && <p className="text-red-500">{formik.errors.name}</p>}

          <input value={formik.values.age} onChange={formik.handleChange} onBlur={formik.handleBlur} className="input" name="age" type="number" placeholder="age" />
          {formik.touched.age && formik.errors.age && <p className="text-red-500">{formik.errors.age}</p>}

          <button className="btn" onClick={showNextInputs} disabled={!formik.values.name || !formik.values.age}>
            {" "}
            Continue
          </button>
        </>
      )}

      {signupShowInputs === 3 && (
        <>
          <SelectInput formik={formik} />
          <input value={formik.values.phonenb} onChange={formik.handleChange} onBlur={formik.handleBlur} className="input" name="phonenb" type="text" placeholder="phonenb" />
          {formik.touched.phonenb && formik.errors.phonenb && <p className="text-red-500">{formik.errors.phonenb}</p>}

          <button type="submit" className="btn" disabled={!formik.values.phonenb}>
            Submit
          </button>
        </>
      )}
    </form>
  );
};
export default SignupForm;
