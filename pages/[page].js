import { useRouter } from "next/router";
import MainLayout from "../Layout/MainLayout";
import Home from "./page/Home";
import AboutMe from "./page/AboutMe";
import MyWork from "./page/MyWork";
import CommingSoon from "./page/CommingSoon";
import TalkAbout from "./page/TalkAbout";

export default function Page() {
  const router = useRouter();
  const { page } = router.query;
  const selectedPage = () => {
    switch (page) {
      case "Home":
        return <Home />;
      case "About Me":
        return <AboutMe />;
      case "My Work":
        return <MyWork />;
      case "Talk About":
        return <TalkAbout />;

      case "commingSoon":
        return <CommingSoon />;
      default:
        return;
    }
  };
  return <MainLayout title={page} children={selectedPage()} />;
}
