import dummyProfile from "../assets/dummy-profile.png";

const LeftSidebar = () => {
  return (
    <aside className="w-1/4 bg-dark rounded-lg flex flex-col items-center text-center">
      <img className="rounded-full w-20 mt-10" src={dummyProfile} alt="profile-img"></img>
      <h1 className="pt-5 text-white">OMT - Online Money Transfer</h1>
      <p className="pb-5 text-grey text-sm">We offer 100+ premium services to facilitate your payments and financial transactions through more than 1200 locations</p>
      <div className="text-sm">
        <p className="text-grey pb-2">Financial Services</p>
        <p className="text-grey pb-2">Beirut, Sami El Solh - 10,480 followers</p>
      </div>
    </aside>
  );
};

export default LeftSidebar;
