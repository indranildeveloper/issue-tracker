import { Pagination } from "@/components";

const HomePage = () => {
  return <Pagination itemCount={100} pageSize={10} currentPage={10} />;
};

export default HomePage;
