import dummyProfile from "../../assets/dummy-profile.png";
import { useLocation } from "react-router-dom";

const Applicants = () => {
  const { state } = useLocation();
  const { job_id } = state;
  console.log(job_id);

  return (
    <>
      <h1>Hello</h1>
    </>
  );
};

export default Applicants;
