//components:
import Navbar from "../../components/Navbar.components";
import dummyProfile from "../../assets/dummy-profile.png";

const Home = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <main className="h-screen flex justify-center mt-5">
        <div className="w-3/5 flex gap-5">
          <aside className="w-1/4 bg-dark rounded-lg flex flex-col items-center">
            <img className="rounded-full w-20" src={dummyProfile} alt="profile-img"></img>
            <h1 className="pt-5 text-white">OMT - Online Money Transfer</h1>
            <p className="pb-5 text-grey">We offer 100+ premium services to facilitate your payments and financial transactions through more than 1200 locations</p>
            <div>
              <p className="text-white">Financial Services</p>
              <p className="text-grey">Beirut, Sami El Solh - 10,480 followers</p>
            </div>
          </aside>

          <section className="w-3/4 flex flex-col items-center bg-dark rounded-lg">
            <div className="border border-black w-full flex">
              <img className="rounded-full w-20" src={dummyProfile} alt="profile-img"></img>
              <p>Post a Job</p>
            </div>

            <div>
              <div>
                <img src={dummyProfile} alt="profile-img" />
                <div>
                  <p>Full Stack Developer - CRM</p>
                  <p>ONT - Online Money Transfer</p>
                  <p>Beirut, Lebanon (On-site)</p>
                </div>
              </div>
              <p>18 hours ago</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;
