import JobCard from "../../components/user/JobCard.components";

const Feed = () => {
  return (
    <section>
      <div className="border-b-2 border-black h-20 w-full flex justify-center items-center">
        <input type="text" placeholder="Search a Job" className="text-white bg-transparent outline-0 border border-white w-3/4 h-3/5 rounded-full pl-5" />
      </div>
    <JobCard/>
    </section>
  );
};

export default Feed;
