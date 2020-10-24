export default function ContactBar() {
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
    </div>
  );
}
