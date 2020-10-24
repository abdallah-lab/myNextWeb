import MyHead from "../components/MyHead";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function MainLayout({ title, children }) {
  return (
    <div>
      <MyHead title={title} />
      <Header />
      <NavBar title={title} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
