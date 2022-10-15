import viewIcon from "../../assets/view.icon.png";
import dummyProfile from '../../assets/dummy-profile.png';
//components:
import Navbar from "../../components/Navbar.components";
import Sidebar from "../../components/Sidebar.components";

const Home = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <main className="h-screen flex justify-center mt-5">
        <div className="w-3/5 flex gap-5">
          <Sidebar />

          <section className="w-3/4 flex flex-col items-center bg-dark rounded-lg ">
            <div className="border border-black w-full flex items-center justify-between p-5 gap-5">
              <img className="rounded-full w-20" src={dummyProfile} alt="profile-img"></img>
              <p className="text-white border border-white w-full h-1/2 rounded-full pl-5 pt-2 cursor-pointer">Post a Job</p>
            </div>

            <div className="border border-black w-full py-3">
              <div>
                <button className="min:w-1/5 pr-5 pt-3 h-1/4 float-right text-sm bold text-blue">
                  <img className="inline-block pr-1" src={viewIcon} alt="view-icon" />
                  View Applicants
                </button>
                <p className="text-white pl-5 text-lg">Full Stack Developer - CRM</p>
                <p className="text-grey pl-5 pb-3 text-md">OMT - Online Money Transfer</p>
              </div>

              <p className="text-grey pl-5 text-sm">Beirut, Lebanon (On-site)</p>
              <p className="text-green pl-5 text-xs inline-block">18 hours ago</p>
            </div>

            <div className="border border-black w-full py-3">
              <div>
                <button className="min:w-1/5 pr-5 pt-3 h-1/4 float-right text-sm bold text-blue">
                  <img className="inline-block pr-1" src={viewIcon} alt="view-icon" />
                  View Applicants
                </button>
                <p className="text-white pl-5 text-lg">Full Stack Developer - CRM</p>
                <p className="text-grey pl-5 pb-3 text-md">OMT - Online Money Transfer</p>
              </div>

              <p className="text-grey pl-5 text-sm">Beirut, Lebanon (On-site)</p>
              <p className="text-green pl-5 text-xs inline-block">18 hours ago</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;
