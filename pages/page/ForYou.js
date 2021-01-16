import { colors } from "../../public/js/options";
import PageTitle from "../../Components/PageTitle";
import NameBar from "../../Components/NameBar";
import Link from "next/link";
import { books, links } from "../../public/js/forYou";

export default function ForYou() {
  return (
    <>
      <PageTitle title={"Many Important Things For You"} />
      <NameBar title={"Important books for you :"} />
      <div className="scrollbar">
        {books.map((book) => (
          <div className="book">
            <Link href={book.link}>
              <img src={`/img/foryou/${book.img}`} alt="" className="img" />
            </Link>
          </div>
        ))}
      </div>
      <NameBar title={"Library for you :"} />
      <NameBar title={"Links for you :"} />
      <div className="scrollbar">
        {links.map((link) => (
          <div className="link">
            <Link href={link.link}>
              <img src={`/img/foryou/${link.img}`} alt="" className="img" />
            </Link>
          </div>
        ))}
      </div>

      <style jsx>{`
        .flexContainer {
          margin: 0.5rem 0rem;
        }

        .scrollbar {
          width: 100%;
          overflow-x: scroll;
          display: -webkit-box;
          display: -moz-box;
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          flex-flow: row;
          padding: 1rem;
        }

        .scrollbar::-webkit-scrollbar-track {
            webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
            border-radius: 10px;
            background-color: #ffffff;
        }

        .scrollbar::-webkit-scrollbar {
            height: 5px;
            width: 5px;
            background-color: #f5f5f5;
        }

        .scrollbar::-webkit-scrollbar-thumb {
            border-radius: 10px;
            webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
            background-color: #f1f060;
        }
        .book {
          border: 1px solid rgba(101, 103, 138, 1);
          border-radius: 1.2rem;
          width: 12rem;
          display: flex;
          height: 16rem;
          margin: 0.3rem;
        }

        .book img {
          border-radius: 20px;
          width: 100%;
        }
        .link {
          border: 1px solid rgba(101, 103, 138, 1);
          border-radius: 1.2rem;
          width: 12rem;
          display: flex;
          height: 12rem;
          margin: 0.3rem;
        }

        .link img {
          border-radius: 20px;
          width: 100%;
        }
      `}</style>
    </>
  );
}
