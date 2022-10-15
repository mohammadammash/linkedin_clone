import { useFormik } from "formik";
import * as Yup from "yup";
import { Dialog } from "@headlessui/react";

//components
import SelectInput from "./SelectInput.components";

const UserSignupForm = ({ isOpen, setIsOpen }) => {
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
      setIsOpen(false);
    },
  });

  return (
    <Dialog className="fixed inset-0" open={isOpen} onClose={() => setIsOpen(false)}>
      <div className="flex items-center justify-center h-screen">
        <Dialog.Panel className="w-full border border-black max-w-sm gap-3 rounded flex flex-col items-center justify-around bg-white relative">
          <button className="border-none" onClick={() => setIsOpen(false)}>
            Close
          </button>
          <Dialog.Title className="text-2xl">User Signup</Dialog.Title>
          <form onSubmit={formik.handleSubmit} onChange={formik.handleChange} className="flex flex-col gap-3">
            <input className="input" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} name="email" type="email" placeholder="email" />
            {formik.touched.email && formik.errors.email && <p className="text-red-500">{formik.errors.email}</p>}

            <input value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} className="input" name="password" type="password" placeholder="password" />
            {formik.touched.password && formik.errors.password && <p className="text-red-500">{formik.errors.password}</p>}

            <input value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} className="input" name="name" type="text" placeholder="name" />
            {formik.touched.name && formik.errors.name && <p className="text-red-500">{formik.errors.name}</p>}

            <input value={formik.values.age} onChange={formik.handleChange} onBlur={formik.handleBlur} className="input" name="age" type="number" placeholder="age" />
            {formik.touched.age && formik.errors.age && <p className="text-red-500">{formik.errors.age}</p>}

            <SelectInput formik={formik} />
            <input value={formik.values.phonenb} onChange={formik.handleChange} onBlur={formik.handleBlur} className="input" name="phonenb" type="text" placeholder="phonenb" />
            {formik.touched.phonenb && formik.errors.phonenb && <p className="text-red-500">{formik.errors.phonenb}</p>}

            <button type="submit" className="btn w-full h-12 my-5">
              Submit
            </button>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
export default UserSignupForm;
