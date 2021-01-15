import { useState, useEffect } from "react";
import { colors } from "../../public/js/options";
import NameBar from "../../Components/NameBar";
import {
  TutorialCategory,
  Tutorials as ImportedTutorial
} from "../../public/js/Data";

export default function Reserve() {
  const [Tutorials, setTutorials] = useState([]);
  const [Msg, setMsg] = useState("");
  useEffect(() => {
    var a = 1;
    ImportedTutorial.map((tutorial) => (tutorial.id = a++));
    ImportedTutorial.map((tutorial) => (tutorial.hours = 0));
    setTutorials(ImportedTutorial);
  }, []);
  useEffect(() => {
    // setCart(Tutorials.filter((tutorial) => tutorial.hours > 0));
    const filteredProduct = Tutorials.filter((tutorial) => tutorial.hours > 0);
    setMsg(
      filteredProduct
        .map((tutorial) => tutorial.name.en + " x" + tutorial.hours)
        .toString()
    );
  }, [Tutorials]);

  const setHours = (id, hours) => {
    setTutorials(
      Tutorials.map((tutorial) => {
        if (tutorial.id === id) {
          tutorial.hours = hours;
          return tutorial;
        } else {
          return tutorial;
        }
      })
    );
  };
  return (
    <>
      <div className="title">Reserve Tutoring Time</div>
      <div>
        {TutorialCategory.map((category) => (
          <>
            <NameBar title={category + " Tutorials"} />
            <div className="scrollbar">
              {Tutorials.filter(
                (tutorial) => category === tutorial.category
              ).map((tutorial) => (
                <Tutorial setHours={setHours} tutorial={tutorial} />
              ))}
            </div>
          </>
        ))}
      </div>

      <style jsx>{`
        .title {
          color: ${colors.primaryColorDark};
          font-size: 2.5rem;
          text-align: center;
          padding: 1rem 0.5rem;
        }
        .scrollbar {
          width: 100%;
          overflow: auto;
          display: -webkit-box;
          display: -moz-box;
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          margin-bottom: 1rem;
          padding: 0.2rem 1rem;
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
      `}</style>
    </>
  );
}

const Tutorial = ({ tutorial, setHours }) => {
  return (
    <>
      <div className="tutorial">
        <img
          src={`img/reserve/${tutorial.img}.png`}
          alt={tutorial.img}
          className="img"
        />
        {tutorial.hours === 0 ? (
          <div
            className="tutorialbtn"
            onClick={() => setHours(tutorial.id, tutorial.hours + 2)}
          >
            Reserve
          </div>
        ) : (
          <div className="tutorialbtns">
            <div
              className="plus"
              onClick={() => setHours(tutorial.id, tutorial.hours + 2)}
            >
              +
            </div>
            <div className="hours">{tutorial.hours}</div>
            <div
              className="min"
              onClick={() => setHours(tutorial.id, tutorial.hours - 2)}
            >
              -
            </div>
          </div>
        )}
      </div>
      <style jsx>{`
        .img {
          height: 9rem;
        }
        .tutorial {
          border: 1px solid black;
          padding: 0.3rem;
          border-radius: 0.3rem;
          margin: 0.5rem;
        }

        .tutorialbtn {
          font-size: 1.2rem;
          color: white;
          border-radius: 0.3rem;
          padding: 0.3rem;
          background: ${colors.primaryColorDark};
          text-align: center;
        }

        .tutorialbtn:hover {
          cursor: pointer;
        }
        .tutorialbtns {
          font-size: 1.8rem;
          font-width: bold;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .plus,
        .min {
          color: white;
          border-radius: 5rem;
          height: 1.6rem;
          width: 1.6rem;
          display: flex;
          justify-content: center;
          align-items: center;
          align-self: center;
        }
        .plus {
          background: ${colors.primaryColorDark};
        }
        .min {
          background: grey;
        }
        .hours::after {
          content: " hours";
          font-size: 0.8rem;
        }
      `}</style>
    </>
  );
};
