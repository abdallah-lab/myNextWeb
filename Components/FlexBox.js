import NameBar from "./NameBar";

export default function FlexBox({ title, folder, number }) {
  return (
    <>
      <NameBar title={title} />
      <div className="scrollbar">
        <div className="force-overflow">
          {Array.from(Array(number).keys()).map((n) => (
            <img src={`img/${folder}/${n}.png`} alt="" className="img" />
          ))}
        </div>
      </div>
      <style jsx>{`
        .scrollbar {
          margin: auto;
          width: 95%;
          overflow-x: scroll;
          border-radius: 10px;
          display: -webkit-box;
          display: -moz-box;
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          flex-flow: row;
        }

        .force-overflow {
          display: flex;
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
        .img {
          height: 9rem;
        }
      `}</style>
    </>
  );
}
