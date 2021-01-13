export default function Marquee() {
  return (
    <>
      <marquee className="marquee">
        <span>
          &nbsp;&nbsp; |
          <img src="_image/icon.png" alt="" className="img" />| &nbsp;&nbsp;
          Talk about:
        </span>
      </marquee>
      <style jsx>{`
      .img{
         style:height: 24px
      }
    .marquee{
         margin: 0px;
         position: fixed;
         background: rgba(251,251,216,0.98);
         color: rgba(101,103,138,1.00);
         bottom:20px;
         font-size: 28px;
         height: 40px;
         width: 100%;
         border:1px solid rgba(211,192,8,1.00);
         border-width: 1px 0px 1px 0px;
         }
      
      .marquee::after {
       content: "";
       clear: both;
       display: table;
      
   }
      `}</style>
    </>
  );
}
