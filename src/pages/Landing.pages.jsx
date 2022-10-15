import right_section_img from "../assets/landing_right_bg.svg";
import { user_agreement_link, privacy_policy_link, cookie_policy_link } from "../constants/variables.constants";
import { useState } from "react";
// components:
import Navbar from "../components/common/Navbar.components";
import AnchorTag from "../components/common/AnchorTag.components";
import UserSignupForm from "../components/landing/UserSignupForm.components";
import CompanySignupForm from "../components/landing/CompanySignupForm.components";
import SigninForm from "../components/landing/SigninForm.components";

function Landing() {
  const ShowSigninModal = () => setIsOpenSignin((isOpenSignin) => !isOpenSignin);
  const [isOpenSignin, setIsOpenSignin] = useState(false);

  const ShowUserSignupModal = () => setIsOpenUserSignup((isOpenUserSignup) => !isOpenUserSignup);
  const [isOpenUserSignup, setIsOpenUserSignup] = useState(false);

  const ShowCompanySignupModal = () => setIsOpenCompanySignup((isOpenCompanySignup) => !isOpenCompanySignup);
  const [isOpenCompanySignup, setIsOpenCompanySignup] = useState(false);

  return (
    <>
      <Navbar />

      <div className="flex justify-center">
        <main className="container w-3/4 flex flex-col md:flex-row">
          {/* START OF LEFT SECTION */}
          <section className="my-5 h-3/4 flex flex-col justify-center items-center">
            <div className="content w-full lg:w-3/4 min:w-1/2 flex flex-col gap-3">
              <h1 className="text-5xl text-gold mb-5">Join the biggest professional community</h1>
              <button type="submit" className="btn w-3/4 h-12" onClick={ShowUserSignupModal}>
                New User
              </button>{" "}
              <button type="submit" className="btn w-3/4 h-12" onClick={ShowCompanySignupModal}>
                New Company
              </button>
              <p className="text-xs w-3/4">
                By clicking Agree & Join, you agree to the LinkedIn
                <AnchorTag aref={user_agreement_link} target={"_blank"} rel={"noreferrer"} text={"User Agreement, "} />
                <AnchorTag aref={privacy_policy_link} target={"_blank"} rel={"noreferrer"} text={"Privacy Policy, "} />
                <AnchorTag aref={cookie_policy_link} target={"_blank"} rel={"noreferrer"} text={"Cookie Policy "} />
              </p>
              <p className="w-3/4 line-word-wrap">
                <span>or</span>
              </p>
              <p className="w-3/4 text-sm text-center">
                Already on linkedIn?
                <span className="text-blue cursor-pointer" onClick={ShowSigninModal}>
                  {" "}
                  Sign in
                </span>
              </p>
            </div>
          </section>
          {/* END OF LEFT SECTION */}

          <img className="h-3/4" src={right_section_img} alt="landing_image"></img>
        </main>
      </div>

      {/* Signin Modal - hidden by default */}
      <SigninForm isOpen={isOpenSignin} setIsOpen={setIsOpenSignin} />
      <UserSignupForm isOpen={isOpenUserSignup} setIsOpen={setIsOpenUserSignup} />
      <CompanySignupForm isOpen={isOpenCompanySignup} setIsOpen={setIsOpenCompanySignup} />
    </>
  );
}

export default Landing;
