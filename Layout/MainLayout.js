import Head from "../Components/Head";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

export default function MainLayout({ title, children }) {
  return (
    <html>
      <Head title={title} />
      <body>
        <Header />
        <NavBar title={title} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
