import Input from "./SelectInput.components.jsx";
import { Dialog } from "@headlessui/react";

const SigninForm = ({ isOpen, setIsOpen }) => {
  return (
    <Dialog className="relative left-1/3 " open={isOpen} onClose={() => setIsOpen(false)}>
      <div className="fixed inset-0 bg-black/10" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4"></div>
      <Dialog.Panel className="w-full max-w-sm gap-3 rounded flex flex-col items-center justify-around bg-white relative">
        <button onClick={() => setIsOpen(false)}>X</button>
        <Dialog.Title className="text-xl">Signin</Dialog.Title>
        <Dialog.Description>This will permanently deactivate your account</Dialog.Description>

        <Input type={"email"} />
        <Input type={"password"} />

        <button className="btn" onClick={() => setIsOpen(false)}>
          Sign in
        </button>
      </Dialog.Panel>
    </Dialog>
  );
};

export default SigninForm;
