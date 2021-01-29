import { column } from "../public/js/mytime";
import { colors } from "../public/js/options";
import { FaCheck } from "react-icons/fa";
import { useState } from "react";

export default function Calendar({ row, setTime }) {
  return (
    <>
      <div className="calender">
        <div className="calenderRow">
          {column.map((item, i) => (
            <div className="firstRowCell">{item.label}</div>
          ))}
        </div>
        {row.map((row, y) => (
          <div key={y} className="calenderRow">
            {column.map((cell, x) => (
              <Cell key={x} row={row} cell={cell.name} setTime={setTime} />
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
        .firstRowCell {
          font-size: 0.9rem;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 1.8rem;
          padding: 0.2rem;
          border: 0.5px solid #999;
          flex: 1 1 100%;
          background: ${colors.primaryColor};
          color: white;
        }
      `}</style>
    </>
  );
}
const Cell = ({ setTime, row, cell }) => {
  return (
    <>
      <span className="cell">
        {typeof row[cell] === "object" ? (
          row[cell].checked === 0 ? (
            <div
              className={row[cell].selected ? "selected" : "empty"}
              onClick={() => {
                setTime(row.day, cell);
              }}
            >
              {row[cell].selected ? <FaCheck /> : null}
            </div>
          ) : (
            <div className="checked">
              <FaCheck />
            </div>
          )
        ) : (
          row[cell]
        )}
      </span>
      <style jsx>{`
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

        .selected {
          width: 100%;
          height: 100%;
          background: ${colors.secondaryColor};
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
};
