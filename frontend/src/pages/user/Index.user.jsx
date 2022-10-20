//components:
import Navbar from "../../components/common/Navbar.components";
import LeftSidebar from "../../components/common/LeftSidebar.components";
import { Outlet } from "react-router";
import RightSidebar from "../../components/user/RightSidebar.components";


const Index = () => {
  return (
    <div className="bg-black">
          <Navbar />

          <main className="h-screen flex justify-center mt-5">
            <div className="w-3/5 flex gap-5">
              <LeftSidebar usertype="user" />

              <section className="w-1/2 flex flex-col items-center bg-dark rounded-lg ">
                <Outlet />
              </section>

              <RightSidebar />
            </div>
          </main>
    </div>
  );
};

export default Index;
