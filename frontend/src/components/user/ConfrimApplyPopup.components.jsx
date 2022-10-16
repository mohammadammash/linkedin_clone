import { Dialog } from "@headlessui/react";

const ConfrimApplyPopup = ({ isOpen, setIsOpen }) => {
  return (
    <Dialog className="fixed inset-0" open={isOpen} onClose={() => setIsOpen(false)}>
      <div className="flex items-center justify-center h-screen">
        <Dialog.Panel className="w-full border-2 border-white bg-white bg-opacity-95 max-w-sm rounded-lg items-center justify-around relative">
          <Dialog.Title className="text-3xl text-center mt-2 mb-5">Easy Apply</Dialog.Title>
          <button onClick={() => setIsOpen(false)} className="h-12 my-3 mb-5 w-1/3">
            Cancel
          </button>
          <button type="submit" className="btn h-12 w-1/3 mt-3 mb-5">
            Confirm Apply
          </button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default ConfrimApplyPopup;
