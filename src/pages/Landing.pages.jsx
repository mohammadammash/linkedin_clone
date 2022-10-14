import right_section_img from "../assets/landing_right_bg.svg";
// components:
import Navbar from "../components/Navbar.components";
import Input from "../components/Input.components";
import AnchorTag from "../components/AnchorTag.components";
import { user_agreement_link, privacy_policy_link, cookie_policy_link } from "../constants/variables.constants";

function Landing() {
  return (
    <>
      <Navbar />

      {/* START OF LEFT SECTION */}
      <section>
        <h1>Join the biggest professional community</h1>
        <Input type={"email"} />
        <Input type={"password"} />
        <p>
          By clicking Agree & Join, you agree to the LinkedIn
           <AnchorTag aref={user_agreement_link} target={"_blank"} rel={"noreferrer"} text={"User Agreement, "} />
          <AnchorTag aref={privacy_policy_link} target={"_blank"} rel={"noreferrer"} text={"Privacy Policy, "} />
          <AnchorTag aref={cookie_policy_link} target={"_blank"} rel={"noreferrer"} text={"Cookie Policy "} />
        </p>
        <button>Agree & Join</button>
        <p>
          <span>or</span>
        </p>
        <p>
          Aleady on linkedIn?
          <span>Sign in</span>
        </p>
      </section>
      {/* END OF LEFT SECTION */}

      {/* START OF RIGHT SECTION */}
      <section>
        <img src={right_section_img}></img>
      </section>
      {/* END OF RIGHT SECTION */}
    </>
  );
}

export default Landing;
