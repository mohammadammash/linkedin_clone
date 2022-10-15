import dummyProfile from "../../assets/dummy-profile.png";
//components
import LeftSidebar from "../../components/common/LeftSidebar.components";
import Navbar from "../../components/common/Navbar.components";

const Applicants = () => {
  return (
    <>
      <div className="bg-black">
        <Navbar />

        <main className="h-screen flex justify-center mt-5 bg-black bg-opacity-40 backdrop-blur-sm">
          <div className="w-3/5 flex gap-5">
            <LeftSidebar />

            {/* START OF MAIN FEED SECTION */}
            <section className="w-3/4 flex flex-col items-center bg-dark rounded-lg ">
              {/* JOB POST BUTTON => SHOW NEW POST MODAL */}
            </section>
            {/* END OF MAIN FEED SECTION */}
          </div>
        </main>
      </div>
    </>
  );
};

export default Applicants;
