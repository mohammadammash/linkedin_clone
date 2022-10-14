import { Dialog } from "@headlessui/react";

const SigninForm = ({ isOpen, setIsOpen }) => {
  return (
    <Dialog className="relative left-1/3 " open={isOpen} onClose={() => setIsOpen(false)}>
      <div className="fixed inset-0 bg-black/10" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4"></div>
      <Dialog.Panel className="w-full max-w-sm gap-3 rounded flex flex-col items-center justify-around bg-white relative">
        <button className="w-3/4" onClick={() => setIsOpen(false)}>X</button>
        <Dialog.Title className="text-xl">Signin</Dialog.Title>
        <Dialog.Description>This will permanently deactivate your account</Dialog.Description>

        <form className="flex flex-col gap-3">
          <input className="input" name="email" type="email" placeholder="email" />
          <input className="input" name="password" type="password" placeholder="password" />

          <button className="btn" onClick={() => setIsOpen(false)}>
            Sign in
          </button>
        </form>
      </Dialog.Panel>
    </Dialog>
  );
};

export default SigninForm;
