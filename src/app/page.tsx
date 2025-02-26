import { FC } from "react";
import { Pagination } from "@/components";
import { HomePageProps } from "@/interfaces";

const HomePage: FC<HomePageProps> = async ({ searchParams }) => {
  const { page } = await searchParams;

  const currentPage = page ? parseInt(page) : 1;

  return <Pagination itemCount={100} pageSize={10} currentPage={currentPage} />;
};

export default HomePage;
