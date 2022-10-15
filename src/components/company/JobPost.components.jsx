import viewIcon from "../../assets/view.icon.png";

const JobPost = () => {
  return (
    <div className="border border-black w-full py-3">
      <div>
        <button className="min:w-1/5 pr-5 pt-3 h-1/4 float-right text-sm bold text-blue">
          <img className="inline-block pr-1" src={viewIcon} alt="view-icon" />
          View Applicants
        </button>
        <p className="text-white pl-5 text-lg">Full Stack Developer - CRM</p>
        <p className="text-grey pl-5 pb-3 text-md">OMT - Online Money Transfer</p>
      </div>

      <p className="text-grey pl-5 text-sm">Beirut, Lebanon (On-site)</p>
      <p className="text-green pl-5 text-xs inline-block">18 hours ago</p>
    </div>
  );
};

export default JobPost;
