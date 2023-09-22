import Layout from "@/components/layouts";
import ScreeningContainer from "@/components/screening";
import { SCREENING_TABS } from "@/utils/genre.json";
import { useState } from "react";

export default function ScreeningPage() {
  const [currentTab, setCurrentTab] = useState("all");

  return (
    <Layout
      title="상영 | SMDB"
      description="SMDB의 상영 페이지"
      active="screening"
      isTabs
      currentTab={currentTab}
      subData={SCREENING_TABS}
      onChangeTab={setCurrentTab}
    >
      <ScreeningContainer currentTab={currentTab} />
    </Layout>
  );
}
