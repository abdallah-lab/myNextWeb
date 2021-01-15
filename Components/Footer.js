import { colors } from "../public/js/options";
import ContactBar from "./ContactBar";
import { footerList } from "../public/js/Data";
export default function Footer() {
  return (
    <>
      <ContactBar />
      <div className="footer">
        {/* <div className="footerElements">
          {footerList.map((item, index) => (
            <div key={index} className="cen">
              <ul>
                <h1 className="footerTitle">{item.title}</h1>
                {item.list.map((l, i) => (
                  <li key={i}>{l}</li>
                ))}
              </ul>
            </div>
          ))}
        </div> */}
        <div>© All Rights Reserved to Abdallah Mobarak since 2015</div>
      </div>
      <style jsx>{`
        .footer {
          color: white;
          max-width: 100%;
          padding: 0.5rem;
          background-color: ${colors.primaryColor};
          border-top: 1px solid black;
          text-align: center;
        }
        .footerElements {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
        .footerTitle {
          line-height: 50px;
          font-family: alice;
          font-size: 1.6rem;
          color: white;
          text-align: left;
        }

        .cen {
          min-width: 15rem;
          padding: 2rem 0;
          flex: 1 1 15rem;
        }
        .cen ul li {
          font-family: "Josefin Slab";
          font-size: 1.3rem;
          color: ${colors.secondaryColor};
          list-style-type: none;
          padding: 0.5rem;
          text-align: left;
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
