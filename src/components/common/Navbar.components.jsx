import linkedin_full_logo from "../../assets/linkedin-full-logo.wine.svg";
import linkedin_nav_logo from "../../assets/linkedin-nav.png";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  //get page we are in
  const location = useLocation().pathname;
  const isLandingPage = location === "/";
  let image;
  if (isLandingPage) image = <img className="h-20" src={linkedin_full_logo} alt="logo"></img>;
  else image = <img className="h-15" src={linkedin_nav_logo} alt="logo"></img>;

  return (
    <nav className={`flex justify-center ${isLandingPage ? "bg-white" : "bg-dark"}`}>
      <div className="container w-3/5 flex justify-between">
        {image}
        <div>
          <button className="text-white h-12 w-20">Home</button>
          <button className="text-white h-12 w-20">Logout</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
