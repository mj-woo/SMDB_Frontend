import Layout from "@/components/layouts";
import MovieCategoryContainer from "@/components/movie";
import { ALL_GENRE } from "@/utils/genre.json";
import { useState } from "react";

export default function MovieCategoryPage() {
  const [currentTab, setCurrentTab] = useState<string>("all");

  return (
    <Layout
      active="movie"
      isTabs
      subData={ALL_GENRE}
      currentTab={currentTab}
      onChangeTab={setCurrentTab}
      title="카테고리 | SMDB"
      description="SMDB의 카테고리 페이지"
    >
      <MovieCategoryContainer currentTab={currentTab} />
    </Layout>
  );
}
