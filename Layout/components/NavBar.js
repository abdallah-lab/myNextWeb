import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar({ title }) {
  const [hidden, setHidden] = useState(true);

  const router = useRouter();
  const page = router.query;

  useEffect(() => {
    setHidden(true);
  }, [page]);

  const nav = [
    { title: "Home", link: "Home" },
    { title: "About Me", link: "AboutMe" },
    { title: "My Work", link: "MyWork" },
    { title: "For You", link: "ForYou" },
    { title: "Reserve", link: "Reserve" },
    { title: "Talk About", link: "TalkAbout" },
    { title: "Contact Me", link: "ContactMe" },
    { title: "Reserve", link: "Reserve" },
    { title: "Talk About", link: "TalkAbout" },
    { title: "Contact Me", link: "ContactMe" }
  ];
  return (
    <div>
      <div onClick={() => setHidden(!hidden)} className="nv">
        <i className="fa fa-2x fa-navicon"></i>
      </div>
      <div className="navbar">
        <ul className={`max ${hidden && "displayNone"}`}>
          {nav.map((obj, index) => {
            return (
              <li
                key={index}
                className={`navli ${title === obj.title && "active"}`}
              >
                <Link href={`/page/${obj.link}`}>{obj.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
