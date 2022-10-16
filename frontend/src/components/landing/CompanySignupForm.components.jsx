import { useFormik } from "formik";
import * as Yup from "yup";
import { Dialog } from "@headlessui/react";

//components

const CompanySignupForm = ({ isOpen, setIsOpen }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      offer: "",
      services: "",
      location: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string("Invalid").required("Required"),
      password: Yup.string().required("Required"),
      offer: Yup.string().required("Required"),
      name: Yup.string().required("Required"),
      services: Yup.string().required("Required"),
      location: Yup.string().required("Required"),
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
          <Dialog.Title className="text-2xl">Company Signup</Dialog.Title>

          <form onSubmit={formik.handleSubmit} onChange={formik.handleChange} className="flex flex-col gap-3">
            <input className="input" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} name="email" type="email" placeholder="Email" />
            {formik.touched.email && formik.errors.email && <p className="text-red-500">{formik.errors.email}</p>}

            <input value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} className="input" name="password" type="password" placeholder="Password" />
            {formik.touched.password && formik.errors.password && <p className="text-red-500">{formik.errors.password}</p>}

            <input value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} className="input" name="name" type="text" placeholder="Company Name" />
            {formik.touched.name && formik.errors.name && <p className="text-red-500">{formik.errors.name}</p>}

            <input value={formik.values.offer} onChange={formik.handleChange} onBlur={formik.handleBlur} className="input" name="offer" type="text" placeholder="What your company offers" />
            {formik.touched.offer && formik.errors.offer && <p className="text-red-500">{formik.errors.offer}</p>}

            <input value={formik.values.services} onChange={formik.handleChange} onBlur={formik.handleBlur} className="input" name="services" type="text" placeholder="services type( sports, education..)" />
            {formik.touched.services && formik.errors.services && <p className="text-red-500">{formik.errors.services}</p>}

            <input value={formik.values.location} onChange={formik.handleChange} onBlur={formik.handleBlur} className="input" name="location" type="text" placeholder="location" />
            {formik.touched.location && formik.errors.location && <p className="text-red-500">{formik.errors.location}</p>}

            <button type="submit" className="btn w-full h-12 my-5">
              Submit
            </button>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default CompanySignupForm;
