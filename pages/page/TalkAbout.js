import { talkAbout } from "../../public/js/talkAbout";
import { colors } from "../../public/js/options";
import { FaCalendarCheck, FaSitemap } from "react-icons/fa";

export default function TalkAbout() {
  return (
    <>
      <div className="title">We can talk about</div>
      <div>
        {talkAbout.map((talk) => (
          <div className="talkBox">
            <div className="talkTitle">{talk.title}</div>
            <div className="talkDescription">
              <div className="cate">
                <span className="icon">
                  <FaSitemap />
                </span>
                {talk.category}
              </div>
              <div className="date">
                <span className="icon">
                  <FaCalendarCheck />
                </span>
                {talk.Date}
              </div>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .title {
          color: ${colors.primaryColorDark};
          font-size: 2.5rem;
          text-align: center;
          padding: 0.5rem 0;
        }
        .talkBox {
          border: 1px solid rgba(148, 148, 148, 0.88);
          border-width: 1px 0px 1px 0px;
          background-color: rgba(241, 240, 96, 0.04);
          padding: 2% 3%;
          margin-bottom: 1.6rem;
        }
        .talkTitle {
          color: rgba(101, 103, 138, 1);
          font-size: 1.4rem;
          text-indent: 1rem;
          text-align: justify;
          letter-spacing: 2px;
        }
        .talkDescription {
          font-size: 0.8rem;
          color: rgba(148, 148, 148, 1);
          padding: 0.5rem 1rem;
          letter-spacing: 1px;
          display: flex;
          justify-content: space-between;
        }
        .date {
          text-align: left;
          flex: 1 1 30%;
        }
        .cate {
          text-align: left;
          flex: 1 1 70%;
        }
        @media only screen and (min-width: 800px) {
          .date {
            flex: 1 1 70%;
          }
          .cate {
            flex: 1 1 30%;
          }
        }
        .icon {
          padding: 0 0.2rem;
        }
      `}</style>
    </>
  );
}
