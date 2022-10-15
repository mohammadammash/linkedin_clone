//components:
import Navbar from "../../components/common/Navbar.components";
import LeftSidebar from "../../components/common/LeftSidebar.components";
import Feed from "./Feed.company";
import { Link, Outlet } from "react-router";

const Index = () => {
  return (
    <div className="bg-black">
      <Navbar />

      <main className="h-screen flex justify-center mt-5">
        <div className="w-3/5 flex gap-5">
          <LeftSidebar />

          <section className="w-3/4 flex flex-col items-center bg-dark rounded-lg ">
            <Outlet/>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Index;
