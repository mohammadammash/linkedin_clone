import viewIcon from "../../assets/view.icon.png";
import { useNavigate } from "react-router-dom";

const JobPost = () => {
  const navigate = useNavigate();
  const showApplicants = () => {
    //replaced by job name and id when data is retrieved
    navigate("web_developer", { state: { job_id: 3 } });
  };

  return (
    <div className="border border-black w-full py-3">
      <div>
        <button onClick={showApplicants} className="min:w-1/5 pr-5 pt-3 h-1/4 float-right text-sm bold text-blue">
          <img className="inline-block pr-1" src={viewIcon} alt="view-icon" />
          View Applicants
        </button>
        <p className="text-white pl-5 text-lg">Full Stack Developer - CRM</p>
        <p className="text-grey pl-5 pb-2 text-md">OMT - Online Money Transfer</p>
        <p className="text-grey pl-5 pb-3 text-sm">maintain a general ledger and review financial statements for accuracy before preparing reports that will assist senior management in making informed decisions about upcoming projects or years' budgets. They're also responsible for keeping track and recording all transactions within a company.</p>
      </div>

      <p className="text-grey pl-5 text-sm">Beirut, Lebanon (On-site)</p>
      <p className="text-green pl-5 text-xs inline-block">18 hours ago</p>
    </div>
  );
};

export default JobPost;
