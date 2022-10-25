import { Dialog } from "@headlessui/react";
import { useFormik } from "formik";
import * as Yup from "yup";

const EditUserPopup = ({ isOpen, setIsOpen }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      description: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Dialog className="fixed inset-0" open={isOpen} onClose={() => setIsOpen(false)}>
      <div className="flex items-center justify-center h-screen">
        <Dialog.Panel className="w-full border border-black max-w-sm gap-3 rounded flex flex-col items-center justify-around bg-white relative">
          <button className="border-none" onClick={() => setIsOpen(false)}>
            Close
          </button>
          <Dialog.Title className="text-2xl">Edit Profile</Dialog.Title>

          <form onSubmit={formik.handleSubmit} onChange={formik.handleChange} className="flex flex-col gap-3">
            <input value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} className="input" name="name" type="name" placeholder="name" />
            {formik.touched.name && formik.errors.name && <p className="text-red-500">{formik.errors.name}</p>}

            <input value={formik.values.description} onChange={formik.handleChange} onBlur={formik.handleBlur} className="input" name="description" type="text" placeholder="description" />
            {formik.touched.description && formik.errors.description && <p className="text-red-500">{formik.errors.description}</p>}
            <button type="submit" className="btn h-12 my-5">
              Submit Change
            </button>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default EditUserPopup;
