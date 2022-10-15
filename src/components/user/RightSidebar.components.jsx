import dummyProfile from "../../assets/dummy-profile.png";
import followIcon2 from "../../assets/follow-icon-white.png";

const RightSidebar = () => {
  return (
    <section className="w-1/4 h-128 overflow-auto scrollbar-hide min-h-96 text-white min-h-96 flex flex-col items-center bg-dark rounded-lg ">
      <p className="my-3 text-lg text-white text-opacity-90 font-bold">Add to your feed</p>
      <div className="border border-black w-full py-3">
        <div className="flex">
          <img className="w-18 h-16 ml-5 mb-2 rounded-full" src={dummyProfile} alt="company-profile"></img>
          <p className="text-grey pl-5 pb-2 text-sm">OMT - Online Money Transfer</p>
        </div>
        <button className="border border-white rounded-full w-1/2 text-sm h-8 float-right mr-2">
          <img className="inline pr-1 w-6" src={followIcon2} alt="view-icon" />
          Follow
        </button>
      </div>
    </section>
  );
};

export default RightSidebar;
