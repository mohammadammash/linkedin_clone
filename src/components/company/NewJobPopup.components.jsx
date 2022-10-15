import { useState } from "react";
import { Dialog } from "@headlessui/react";

const NewJobPopup = ({ isOpen, setIsOpen }) => {
  return (
    <Dialog className="fixed inset-0 left-1/3 top-1/3 md:left-1/3 " open={isOpen} onClose={() => setIsOpen(false)}>
      <div className="flex items-center justify-center p-4"></div>
      <Dialog.Panel className="w-full max-w-sm gap-3 rounded flex flex-col items-center justify-around bg-white relative">
        <button className="border-none" onClick={() => setIsOpen(false)}>
          Close
        </button>

        <Dialog.Title className="text-2xl">Post a Job</Dialog.Title>
        
      </Dialog.Panel>
    </Dialog>
  );
};

export default NewJobPopup;
