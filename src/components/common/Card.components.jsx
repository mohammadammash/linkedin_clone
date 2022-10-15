import dummyProfile from "../../assets/dummy-profile.png";
import viewIcon from "../../assets/view.icon.png";
import linkedInIcon from "../../assets/linkedin-nav.png";
import followIcon from "../../assets/follow-icon.png";
import { useNavigate } from "react-router-dom";

const Card = ({ type, usertype = "" }) => {
  const navigate = useNavigate();

  const showApplicants = () => {
    //replaced by job name and id when data is retrieved
    navigate("web_developer", { state: { job_id: 3 } });
  };

  if (type === "job")
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

  if (type === "applicants-card")
    return (
      <div className="border border-black w-full py-3">
        <div className="flex justify-between">
          <div className=" w-2/4 flex flex-col justify-center gap-2 items-center">
            <img className="rounded-full w-16" src={dummyProfile} alt="view-icon" />
            <p className="text-white pl-5 text-sm text-center">charblessoa@gmial.com</p>
          </div>
          <div className="mr-5">
            <p className="text-white pl-5 text-lg">Mike Miller</p>
            <p className="text-grey pl-5 pb-2 text-md">Senior Security Consultant</p>
            <p className="text-grey pl-5 pb-3 text-sm">I'm a Full-Stack Developer, now I'm discovering my love for Backend Engineering. I love Javascript and its ecosystem, most of my projects are made in React & Next.js. Usually, I share pieces of my experiences through Linkedln or Twitter and although I'm quite introverted in the first meeting, I love to get in touch with other devs!</p>
          </div>
        </div>

        <div className=" w-full flex justify-center items-center">
          <p className="text-white pl-5 text-sm">Beirut, Lebanon</p>
          <p className="text-green pl-5 text-xs inline-block">1 hour ago</p>
        </div>
      </div>
    );

  if (type === "user-feed-company-card") {
    return (
      <div className="border border-black w-full py-3">
        <button onClick={showApplicants} className="min:w-1/5 pr-5 pt-3 h-1/4 float-right text-xs bold text-blue">
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
        <button onClick={showApplicants} className="min:w-1/5 pr-5 pb-3 h-1/4 float-right text-xs bold text-white text-opacity-75">
          <img className="inline-block pr-1 w-6" src={linkedInIcon} alt="view-icon" />
          Easy Apply
        </button>
      </div>
    );
  }
};

export default Card;
