//components:
import Navbar from "../../components/Navbar.components";
import dummyProfile from "../../assets/dummy-profile.png";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="h-screen flex justify-center">
        <div className="w-3/5 flex">
          <aside className="border border-solid w-1/4">
            <img src={dummyProfile} alt="profile-img"></img>
            <h1>OMT - Online Money Transfer</h1>
            <p>We offer 100+ premium services to facilitate your payments and financial transactions through more than 1200 locations</p>
            <p>Financial Services</p>
            <p>Beirut, Sami El Solh - 10,480 followers</p>
          </aside>

          <section className="w-3/4 flex flex-col items-center border border-black">
            <div>
              <img src={dummyProfile} alt="profile-img"></img>
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
    </>
  );
};

export default Home;
