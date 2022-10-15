import viewIcon from '../../assets/view.icon.png';
//components:
import Navbar from "../../components/Navbar.components";
import dummyProfile from "../../assets/dummy-profile.png";

const Home = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <main className="h-screen flex justify-center mt-5">
        <div className="w-3/5 flex gap-5">
          <aside className="w-1/4 bg-dark rounded-lg flex flex-col items-center text-center">
            <img className="rounded-full w-20 mt-10" src={dummyProfile} alt="profile-img"></img>
            <h1 className="pt-5 text-white">OMT - Online Money Transfer</h1>
            <p className="pb-5 text-grey text-sm">We offer 100+ premium services to facilitate your payments and financial transactions through more than 1200 locations</p>
            <div className="text-sm">
              <p className="text-grey pb-2">Financial Services</p>
              <p className="text-grey pb-2">Beirut, Sami El Solh - 10,480 followers</p>
            </div>
          </aside>

          <section className="w-3/4 flex flex-col items-center bg-dark rounded-lg ">
            <div className="border border-black w-full flex items-center justify-between p-5 gap-5">
              <img className="rounded-full w-20" src={dummyProfile} alt="profile-img"></img>
              <p className="text-white border border-white w-full h-1/2 rounded-full pl-5 pt-2 cursor-pointer">Post a Job</p>
            </div>

            <div className="border border-black w-full">
              <div>
                <button className="min:w-1/5 pr-5 pt-3 h-1/4 float-right text-sm bold text-blue"><img className='inline-block pr-1' src={viewIcon} alt='view-icon'/>View Applicants</button>
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
