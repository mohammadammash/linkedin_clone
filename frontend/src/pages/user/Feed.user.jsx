import JobCard from "../../components/user/JobCard.components";
import { useEffect, useState } from "react";
import { getAllJobs } from "../../services/getAllJobs.services";

const Feed = () => {
  const [allJobs, setAllJobs] = useState([]);

  const getAllJobs_UserAPI = async () => {
    setAllJobs(await getAllJobs());
    console.log('hey');
  };
  useEffect(() => {
    getAllJobs_UserAPI();
  }, []);

  return (
    <section>
      <div className="border-b-2 border-black h-20 w-full flex justify-center items-center">
        <input type="text" placeholder="Search a Job" className="text-white bg-transparent outline-0 border border-white w-3/4 h-3/5 rounded-full pl-5" />
      </div>
      {allJobs && (
        <>
        {allJobs.map(job=>
          <JobCard key={job._id} job={job}/>
        )}
        </>
      )}
    </section>
  );
};

export default Feed;
