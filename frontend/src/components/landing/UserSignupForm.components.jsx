import { useFormik } from "formik";
import * as Yup from "yup";
import { Dialog } from "@headlessui/react";
import dummyProfile from "../../assets/dummy-profile.png";
//components
import SelectInput from "./SelectInput.components";
import { useState } from "react";
import { useEffect } from "react";

const UserSignupForm = ({ isOpen, setIsOpen }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
      age: "",
      country: { selectedOption: "Lebanon" },
      profile_base64: "",
    },
    validationSchema: Yup.object({
      email: Yup.string("Invalid").required("Required"),
      password: Yup.string().required("Required"),
      name: Yup.string().required("Required"),
      age: Yup.string().required("Required"),
      profile_base64: Yup.string().required("Profile Image Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      setIsOpen(false);
    },
  });

  // START OF USER PROFILE IMAGE
  const [profileImageShown, setProfileImageShown] = useState(dummyProfile);
  const [base64String, setBase64String] = useState("");

  useEffect(() => {
    formik.values.profile_base64 = base64String;
  }, [base64String]);

  const getBase64 = async (file) => {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      const base64 = reader.result;
      setBase64String(base64);
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  };

  const updateProfileShown = async (e) => {
    if (!e.target.files || e.target.files.length === 0) return;

    const selectedFile = e.target.files[0];
    const objectUrl = URL.createObjectURL(selectedFile);
    await getBase64(e.target.files[0]);
    setProfileImageShown(objectUrl);
  };
  // END OF USER PROFILE IMAGE

  return (
    <Dialog className="fixed inset-0" open={isOpen} onClose={() => setIsOpen(false)}>
      <div className="flex items-center justify-center h-screen">
        <Dialog.Panel className="w-full border border-black max-w-sm gap-3 rounded flex flex-col items-center justify-around bg-white relative">
          <button className="border-none" onClick={() => setIsOpen(false)}>
            Close
          </button>
          <Dialog.Title className="text-2xl">User Signup</Dialog.Title>

          <form onSubmit={formik.handleSubmit} onChange={formik.handleChange} className="flex flex-col gap-3 w-2/3">
            <input className="input" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} name="email" type="email" placeholder="email" />
            {formik.touched.email && formik.errors.email && <p className="text-red-500">{formik.errors.email}</p>}

            <input value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} className="input" name="password" type="password" placeholder="password" />
            {formik.touched.password && formik.errors.password && <p className="text-red-500">{formik.errors.password}</p>}

            <input value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} className="input" name="name" type="text" placeholder="name" />
            {formik.touched.name && formik.errors.name && <p className="text-red-500">{formik.errors.name}</p>}

            <input value={formik.values.age} onChange={formik.handleChange} onBlur={formik.handleBlur} className="input" name="age" type="number" placeholder="age" />
            {formik.touched.age && formik.errors.age && <p className="text-red-500">{formik.errors.age}</p>}

            <SelectInput formik={formik} />

            <div className="flex justify-center">
              <label className="w-1/2 h-1/2" htmlFor="img-show">
                <img className="w-full h-full" src={profileImageShown} alt="profile-pic" />
              </label>
              <input className="hidden" id="img-show" name="image" type="file" onChange={updateProfileShown} onBlur={formik.handleBlur} />
              {formik.touched.profile_base64 && formik.errors.profile_base64 && <p className="text-red-500">{formik.errors.profile_base64}</p>}
            </div>
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
