import JobCard from "../../components/user/JobCard.components";
import { useGetJobs } from "../../query/useGetJobs";

const Feed = () => {
const { data: allJobs, isLoading: isLoadingAllJobs } = useGetJobs();

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
