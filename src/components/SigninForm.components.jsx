import { Dialog } from "@headlessui/react";
import { useFormik } from "formik";
import * as Yup from "yup";

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
      console.log(values);
    },
  });

  return (
    <Dialog className="relative left-1/3 " open={isOpen} onClose={() => setIsOpen(false)}>
      <div className="fixed inset-0 bg-black/10" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4"></div>
      <Dialog.Panel className="w-full max-w-sm gap-3 rounded flex flex-col items-center justify-around bg-white relative">
        <button className="w-3/4" onClick={() => setIsOpen(false)}>
          X
        </button>
        <Dialog.Title className="text-xl">Signin</Dialog.Title>
        <Dialog.Description>This will permanently deactivate your account</Dialog.Description>

        <form onSubmit={formik.handleSubmit} onChange={formik.handleChange} className="flex flex-col gap-3">
          <input value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} className="input" name="email" type="email" placeholder="email" />
          {formik.touched.email && formik.errors.email && <p className="text-red-500">{formik.errors.email}</p>}

          <input value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} className="input" name="password" type="password" placeholder="password" />
          {formik.touched.password && formik.errors.password && <p className="text-red-500">{formik.errors.password}</p>}
          <button type="submit" className="btn">
            Sign in
          </button>
        </form>
      </Dialog.Panel>
    </Dialog>
  );
};

export default SigninForm;
