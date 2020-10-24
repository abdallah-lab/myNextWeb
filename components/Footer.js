import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <div>
        <span className="l-title">Contact Me : </span>

        <span className="fa-stack">
          <a
            href="https://api.whatsapp.com/send?phone=989196639816"
            className="itag"
          >
            <i className="fa fa-whatsapp fa-stack-2x"></i>
          </a>
        </span>

        <span className="fa-stack">
          <a
            className="itag"
            href="https://www.instagram.com/abdallah.mobarak/"
          >
            <i className="fa fa-instagram fa-stack-2x"></i>
          </a>
        </span>

        <span className="fa-stack">
          <a
            className="itag"
            href="https://www.facebook.com/abdallah.mobarak.3"
          >
            <i className="fa fa-circle-thin fa-stack-2x"></i>
            <i className="fa fa-facebook fa-stack-1x"></i>
          </a>
        </span>

        <span className="fa-stack">
          <a className="itag" href="#">
            <i className="fa fa-youtube fa-stack-2x"></i>
          </a>
        </span>

        <span className="fa-stack">
          <a className="itag" href="#">
            <i className="fa fa-circle-thin fa-stack-2x"></i>
            <i className="fa fa-twitter fa-stack-1x"></i>
          </a>
        </span>
      </div>

      <div className="footer">
        <div className="col-1"></div>
        <div className="col-3 col-m-3 cen">
          <ul>
            <h1 className="f-title">Services</h1>
            <li>Business consult</li>
            <br />
            <li>Business Plan</li>
            <br />
            <li>Web design</li>
          </ul>
        </div>

        <div className="col-4 col-m-4 cen">
          <ul>
            <h1 className="f-title">Related Companies</h1>
            <li>Mobarak perfumes</li>
            <br />
            <li>My-Team</li>
            <br />
            <li>Mobarak group</li>
          </ul>
        </div>

        <div className="col-3 col-m-4 cen">
          <ul>
            <h1 className="f-title">Members</h1>
            <li>Teams & groups</li>
            <br />
            <li>Become a member</li>
            <br />
            <li>Built your own business</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
