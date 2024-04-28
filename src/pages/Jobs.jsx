import Navbar from "../components/Navbar";
import JobListings from "../components/JobListings";

const Jobs = () => {
  return (
    <>
      <Navbar />
      <section className="bg-blu-50 px-4 py-6">
        <JobListings />
      </section>
    </>
  );
};

export default Jobs;
