import Layout from "@/components/layouts";
import HomeContainer from "@/components/home";

export default function Home() {
  return (
    <Layout
      active="home"
      title="SMDB"
      description="SMDB"
      keywords="SMDB, movie, trailer"
    >
      <HomeContainer />
    </Layout>
  );
}
