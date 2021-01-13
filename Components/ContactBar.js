import {
  FaWhatsapp,
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaTwitter
} from "react-icons/fa";
import Link from "next/link";
import { colors } from "../public/js/options";

export default function ContactBar() {
  return (
    <>
      <div className="contact">
        <span>Contact Me : </span>
        <span className="icon">
          <Link
            className="itag"
            href="https://api.whatsapp.com/send?phone=989196639816"
          >
            <FaWhatsapp />
          </Link>
        </span>
        <span className="icon">
          <Link
            className="itag"
            href="https://www.instagram.com/abdallah.mobarak/"
          >
            <FaInstagram />
          </Link>
        </span>
        <span className="icon">
          <Link
            className="itag"
            href="https://www.facebook.com/abdallah.mobarak.3"
          >
            <FaFacebook />
          </Link>
        </span>
        <span className="icon">
          <Link className="itag" href="#">
            <FaYoutube />
          </Link>
        </span>
        <span className="icon">
          <Link className="itag" href="#">
            <FaTwitter />
          </Link>
        </span>
      </div>
      <style jsx>{`
        .contact {
          font-size: 1.6rem;

          display: flex;

          align-items: center;

          padding: 0.5rem;

          color: ${colors.primaryColor};
        }

        .icon {
          padding: 0 0.2rem;
        }
      `}</style>
    </>
  );
}
