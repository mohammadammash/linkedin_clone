import { Dialog } from "@headlessui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { LoginUserPostAPI } from "../../services/register.services";

const SigninForm = ({ isOpen, setIsOpen }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      LoginUserPostAPI(values);
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
            <input value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} className="input" name="email" type="email" placeholder="email" />
            {formik.touched.email && formik.errors.email && <p className="text-red-500">{formik.errors.email}</p>}

            <input value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} className="input" name="password" type="password" placeholder="password" />
            {formik.touched.password && formik.errors.password && <p className="text-red-500">{formik.errors.password}</p>}
            <button type="submit" className="btn h-12 my-5">
              Sign in
            </button>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default SigninForm;
