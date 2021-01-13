import { colors } from "../public/js/options";
import ContactBar from "./ContactBar";
export default function Footer() {
  const footerList = [
    {
      title: "Services",
      list: ["Web design", "Business Plan", "Business consult"]
    },
    {
      title: "Related Companies",
      list: ["My-Team", "Mobarak group", "Mobarak perfumes"]
    },
    {
      title: "Members",
      list: ["Teams & groups", "Become a member", "Built your own business"]
    }
  ];
  return (
    <>
      <ContactBar />
      <div className="footer">
        {footerList.map((item, index) => (
          <div key={index} className="cen">
            <ul>
              <h1 className="f-title">{item.title}</h1>
              {item.list.map((l, i) => (
                <li key={i}>{l}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <style jsx>{`
        .footer {
          color: white;
          max-width: 100%;
          padding: 0.5rem;
          background-color: ${colors.primaryColor};
          border-top: 1px solid black;
          padding-bottom: 40px;
          display: flex;
          justify-content: space-evenly;
        }

        .f-title {
          line-height: 50px;
          font-family: alice;
          font-size: 30px;
          color: rgba(255, 255, 255, 1);
        }

        .cen {
          min-width: 15rem;
          padding: 2rem 0;
          flex: 1 1 15rem;
        }
        .cen ul li {
          font-family: "Josefin Slab";
          font-size: 150%;
          color: rgba(241, 240, 96, 1);
          list-style-type: none;
          padding: 0.5rem;
        }

        .itag {
          cursor: pointer;
          color: ${colors.primaryColor};
        }
        .itag:hover {
          color: rgba(241, 240, 96, 1);
        }
      `}</style>
    </>
  );
}
