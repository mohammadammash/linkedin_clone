import right_section_img from "../assets/landing_right_bg.svg";
import linkedin_full_logo from '../assets/linkedin-full-logo.wine.svg';

function Landing() {
  return (
    <>
      {/* START OF NAVBAR */}
      <nav>
        {/* <img src={linkedin_full_logo}></img> */}
      </nav>
      {/* END OF NAVBAR */}

      {/* START OF LEFT SECTION */}
      <section>
        <h1>Join the biggest professional community</h1>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password (8+ characters)" />
        <p>
          By clicking Agree & Join, you agree to the LinkedIn{" "}
          <a href="https://www.linkedin.com/legal/user-agreement?trk=homepage-basic_intl-segments-join_join-form-user-agreement" target="_blank" rel="noreferrer">
            User Agreement,
          </a>
          <a href="https://www.linkedin.com/legal/privacy-policy?trk=homepage-basic_intl-segments-join_join-form-privacy-policy" target="_blank" rel="noreferrer">
            Privacy Policy,
          </a>
          and
          <a href="https://www.linkedin.com/legal/cookie-policy?trk=homepage-basic_intl-segments-join_join-form-cookie-policy" target="_blank" rel="noreferrer">
            Cookie Policy
          </a>
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
