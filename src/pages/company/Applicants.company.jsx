import { useLocation } from "react-router-dom";
//components:
import Card from "../../components/common/Card.components";

const Applicants = () => {
  const { state } = useLocation();
  const { job_id } = state;
  console.log(job_id);

  return (
    <>
    <h1 className="my-5 text-2xl text-white font-bold">All Applicants</h1>
      <Card />
    </>
  );
};

export default Applicants;
