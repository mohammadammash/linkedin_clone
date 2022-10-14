import linkedin_full_logo from "../assets/linkedin-full-logo.wine.svg";

const Navbar = () => {
  return (
    <nav className="flex justify-center">
      <div className="container w-3/4 border border-black">
        <img className="h-20" src={linkedin_full_logo}></img>
      </div>
    </nav>
  );
};

export default Navbar;
