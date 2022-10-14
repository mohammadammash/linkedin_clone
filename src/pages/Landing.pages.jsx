import right_section_img from "../assets/landing_right_bg.svg";
import { user_agreement_link, privacy_policy_link, cookie_policy_link } from "../constants/variables.constants";
// components:
import Navbar from "../components/Navbar.components";
import Input from "../components/Input.components";
import AnchorTag from "../components/AnchorTag.components";
import Button from "../components/Button.components";

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
        <Button text={"Agree & Join"} />
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
      <img src={right_section_img} alt='landing_image'></img>
      {/* END OF RIGHT SECTION */}
    </>
  );
}

export default Landing;
