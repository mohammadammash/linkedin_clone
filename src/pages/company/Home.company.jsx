//components:
import Navbar from "../../components/Navbar.components";
import dummyProfile from "../../assets/dummy-profile.png";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="h-screen border  border-black flex justify-center">
        <div className="w-3/5">
          <aside className="border border-solid">
            <img src={dummyProfile} alt="profile-img"></img>
            <h1>OMT - Online Moeny Transfer</h1>
            <p>We offer 100+ premium services to facilitate your payments and financial transactions through more than 1200 locations</p>
            <p>Financial Services</p>
            <p>Beirut, Sami El Solh - 10,480 followers</p>
          </aside>


        </div>
      </main>
    </>
  );
};

export default Home;
