import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { useFormik } from "formik";
import * as Yup from "yup";

const NewJobPopup = ({ isOpen, setIsOpen }) => {
  const formik = useFormik({
    initialValues: {
      title: "",
      workspace: { selectedOption: "On-site" },
      description: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().min(5, "at least 5 characters").required("Required"),
      description: Yup.string().min(50, "min 50 charcs").required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      setIsOpen(false);
    },
  });

  return (
    <Dialog className="fixed inset-0 left-1/4 top-1/4 md:left-1/3 " open={isOpen} onClose={() => setIsOpen(false)}>
      <div className="flex items-center justify-center p-4"></div>
      <Dialog.Panel className="w-full max-w-sm gap-3 rounded flex flex-col items-center justify-around bg-white relative">
        <button className="border-none" onClick={() => setIsOpen(false)}>
          Close
        </button>

        <Dialog.Title className="text-2xl">Post a Job</Dialog.Title>
        <form onSubmit={formik.handleSubmit} onChange={formik.handleChange} className="flex flex-col gap-3">
          <div>
            <input value={formik.values.title} onChange={formik.handleChange} onBlur={formik.handleBlur} className="input w-full" name="title" type="text" placeholder="Job Title" />
            {formik.touched.title && formik.errors.title && <p className="text-red-500">{formik.errors.title}</p>}
          </div>

          <div>
            <select value={formik.values.workspace} onChange={formik.handleChange} name="workspace" className="input w-full">
              <option value={"On-site"}>On-site</option>
              <option value={"Remotely"}>Remote</option>
            </select>
          </div>

          <div>
            <textarea value={formik.values.description} className="border border-black" rows="5" cols="25" onChange={formik.handleChange} onBlur={formik.handleBlur} name="description" placeholder="Description" />
            {formik.touched.description && formik.errors.description && <p className="text-red-500">{formik.errors.description}</p>}
          </div>

          <button type="submit" className="btn h-12">
            Add
          </button>
        </form>
      </Dialog.Panel>
    </Dialog>
  );
};

export default NewJobPopup;
