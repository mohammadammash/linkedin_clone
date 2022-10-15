import linkedInIcon from "../../assets/linkedin-nav.png";
import followIcon from "../../assets/follow-icon.png";
import dummyProfile from "../../assets/dummy-profile.png";

const JobCard = () => {
  return (
    <div className="border border-black w-full py-3">
      <button className="min:w-1/5 pr-5 pt-3 h-1/4 float-right text-xs bold text-blue">
        <img className="inline-block pr-1 w-6" src={followIcon} alt="view-icon" />
        Follow
      </button>
      <div className="flex">
        <img className="w-18 h-16 pl-5 mb-3" src={dummyProfile} alt="company-profile"></img>
        <div>
          <p className="text-white pl-5 text-lg">Full Stack Developer - CRM</p>
          <p className="text-grey pl-5 pb-2 text-md">OMT - Online Money Transfer</p>
        </div>
      </div>

      <p className="text-grey pl-5 pb-3 text-sm">maintain a general ledger and review financial statements for accuracy before preparing reports that will assist senior management in making informed decisions about upcoming projects or years' budgets. They're also responsible for keeping track and recording all transactions within a company.</p>
      <p className="text-grey pl-5 text-sm">Beirut, Lebanon (On-site)</p>
      <p className="text-green pl-5 text-xs inline-block">18 hours ago</p>
      <button className="min:w-1/5 pr-5 pb-3 h-1/4 float-right text-xs bold text-white text-opacity-75">
        <img className="inline-block pr-1 w-6" src={linkedInIcon} alt="view-icon" />
        Easy Apply
      </button>
    </div>
  );
};

export default JobCard;
