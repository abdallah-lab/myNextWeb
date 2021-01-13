import { useRouter } from "next/router";
import MainLayout from "../Layout/MainLayout";
import Home from "./page/Home";
import AboutMe from "./page/AboutMe";

export default function Page() {
  const router = useRouter();
  const { page } = router.query;
  const selectedPage = () => {
    switch (page) {
      case "Home":
        return <Home />;
      case "About Me":
        return <AboutMe />;
      default:
        return;
    }
  };
  return <MainLayout title={page} children={selectedPage()} />;
}
