import dummyProfile from "../../assets/dummy-profile.png";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
//components:
import Navbar from "../../components/common/Navbar.components";
import LeftSidebar from "../../components/common/LeftSidebar.components";
import JobPost from "../../components/company/JobPost.components";

const Home = () => {
  return (
    <div className="bg-black">
      <Navbar />

      <main className="h-screen flex justify-center mt-5">
        <div className="w-3/5 flex gap-5">
          <LeftSidebar />

          {/* START OF MAIN FEED SECTION */}
          <section className="w-3/4 flex flex-col items-center bg-dark rounded-lg ">
            {/* JOB POST BUTTON => SHOW NEW POST MODAL */}
            <div className="border border-black w-full flex items-center justify-between p-5 gap-5">
              <img className="rounded-full w-20" src={dummyProfile} alt="profile-img"></img>
              <p className="text-white border border-white w-full h-1/2 rounded-full pl-5 pt-2 cursor-pointer">Post a Job</p>
            </div>

            <JobPost />
          </section>
          {/* END OF MAIN FEED SECTION */}
        </div>
      </main>
    </div>
  );
};

export default Home;
