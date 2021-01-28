import { mytime } from "../public/js/mytime";
import { colors } from "../public/js/options";
import { FaCheck } from "react-icons/fa";

export default function Calendar() {
  const calendarColumn = ["day", "two", "four", "six", "eight", "ten"];
  return (
    <>
      <div className="calender">
        {mytime.map((item, y) => (
          <div key={y} className="calenderRow">
            {calendarColumn.map((cell, x) => (
              <span key={x} className="cell">
                {item[cell] === 0 ? (
                  <div
                    className="empty"
                    onClick={() => {
                      alert(y + item.day + " " + cell);
                    }}
                  ></div>
                ) : item[cell] === 1 ? (
                  <div className="checked">
                    <FaCheck />
                  </div>
                ) : (
                  item[cell]
                )}
              </span>
            ))}
          </div>
        ))}
      </div>
      <style jsx>{`
        .calender {
          padding: 1rem 0;
        }

        .calenderRow {
          display: flex;
        }
        .calenderRow:first-child {
          background: ${colors.primaryColor};
          color: white;
        }

        .cell {
          font-size: 0.9rem;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 1.8rem;
          padding: 0.2rem;
          border: 0.5px solid #999;
          flex: 1 1 100%;
        }
        .checked {
          width: 100%;
          height: 100%;
          background: grey;
          border-radius: 0.2rem;
          color: white;
          display: flex;
          align-items: center;
          padding-left: 0.5rem;
        }
        .empty {
          width: 100%;
          height: 100%;
          background: white;
          border-radius: 0.2rem;
        }
      `}</style>
    </>
  );
}
