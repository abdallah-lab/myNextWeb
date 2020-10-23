import { useEffect, useState } from "react";
import Link from "next/link";

export default function NavBar({ title }) {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    setHidden(true);
  }, [title]);
  const nav = [
    { title: "Home", link: "home" },
    { title: "About Me", link: "about_me" },
    { title: "My Work", link: "my_work" },
    { title: "For You", link: "for_you" },
    { title: "Reserve", link: "reserve" },
    { title: "Talk About", link: "talk_about" },
    { title: "Contact Me", link: "contact_me" }
  ];
  return (
    <div>
      <div onClick={() => setHidden(!hidden)} className="nv">
        <i className="fa fa-2x fa-navicon"></i>
      </div>
      <div className="navbar" id="navbar">
        <ul className={`max ${hidden && "displayNone"}`}>
          {nav.map((obj) => {
            return (
              <li className={`navli ${title === obj.title && "active"}`}>
                <Link href={`/${obj.title}`}>{obj.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
