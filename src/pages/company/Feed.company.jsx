import { useState } from "react";
import dummyProfile from "../../assets/dummy-profile.png";
import Card from "../../components/common/Card.components";
import NewJobPopup from "../../components/company/NewJobPopup.components";

const Feed = () => {
  let [isNewJobModalOpen, setIsNewJobModalOpen] = useState(false);

  return (
    <>
      <div className="border border-black w-full flex items-center justify-between p-5 gap-5">
        <img className="rounded-full w-20" src={dummyProfile} alt="profile-img"></img>
        <p onClick={() => setIsNewJobModalOpen(true)} className="text-white border border-white w-full h-1/2 rounded-full pl-5 pt-2 cursor-pointer">
          Post a Job
        </p>
      </div>

      <Card />
      <NewJobPopup isOpen={isNewJobModalOpen} setIsOpen={setIsNewJobModalOpen} />
    </>
  );
};

export default Feed;
