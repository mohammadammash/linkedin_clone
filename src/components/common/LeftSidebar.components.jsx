import dummyProfile from "../../assets/dummy-profile.png";

const LeftSidebar = ({ usertype = "" }) => {
  return (
    <aside className="w-1/4 max-h-96 bg-dark rounded-lg flex flex-col items-center text-center">
      <img className="rounded-full w-20 mt-10" src={dummyProfile} alt="profile-img"></img>
      <h1 className="pt-5 text-white">OMT - Online Money Transfer</h1>
      <p className="pb-3 text-grey text-sm">We offer 100+ premium services to facilitate your payments and financial transactions through more than 1200 locations</p>
      <div className="text-sm border-t-2 border-black pt-3">
        <p className="text-grey pb-2">Financial Services</p>
        <p className="text-grey pb-2">Beirut, Sami El Solh - 10,480 followers</p>
      </div>
      {usertype && usertype === "user" && <button className="btn mt-auto mb-5 w-1/2 text-sm h-8">Edit Profile</button>}
    </aside>
  );
};

export default LeftSidebar;
