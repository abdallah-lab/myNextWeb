import { colors } from "../public/js/options";
export default function Header() {
  return (
    <>
      <div className="header">
        <div className="corner_1">
          <img src="/img/corner_1.png" alt="" />
        </div>
        <div className="corner_2">
          <img src="/img/corner_2.png" alt="" />
        </div>
        <div className="circle">
          <img className="profile_img" src="/img/Wha.png" alt="" />
        </div>
        <div className="elliptic">
          <span>Abdallah Mobarak</span>
        </div>
      </div>
      <style jsx>{`
        .header {
          background: radial-gradient(
            circle,
            #9798b3 0%,
            ${colors.primaryColor} 50%
          );
          background-color: ${colors.primaryColor};
          border-bottom: 1px solid ${colors.greyDark};
          padding: 2rem 0;
          position: relative;
        }

        .circle {
          margin: auto;
          height: 180px;
          width: 180px;
          background-color: white;
          border: 1px solid ${colors.primaryColorDark};
          border-radius: 100px;
          padding: 5px;
        }
        .profile_img {
          width: 100%;
          border-radius: 100px;
        }
        .elliptic {
          background-color: white;
          border: 1px solid ${colors.primaryColorDark};
          border-radius: 12px;
          width: fit-content;
          text-align: center;
          margin: auto;
          margin-top: 10px;
          padding: 0.3rem 2rem;
        }
        .elliptic span {
          display: block;
          position: relative;
          color: ${colors.primaryColorDark};
          font-size: 36px;
        }

        .corner_1 {
          position: absolute;
          left: 0.5rem;
        }
        .corner_2 {
          position: absolute;
          right: 0.5rem;
        }

        .corner-img {
          max-width: 100%;
          padding: 1rem;
        }
        @media only screen and (max-width: 900px) {
          .corner_1 {
            display: none;
          }
          .corner_2 {
            display: none;
          }
        }

        @media only screen and (max-width: 500px) {
          .elliptic {
            height: auto;
          }
          .elliptic span {
            font-size: 28px;
          }
        }
      `}</style>
    </>
  );
}
