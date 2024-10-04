import Link from "next/link";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Logo } from "@/icons";
import { useRouter } from "next/router";
import { links, mediaLinks } from "@/lib/links";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (router.asPath.includes("#")) {
      const anchor = router.asPath.substring(router.asPath.indexOf("#") + 1);
      const element = document.getElementById(anchor);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [router.asPath]);

  const handleCloseMenu = () => setShowMenu(false);

  return (
    <nav className="navbar  text-white absolute top-0 w-full">
      <div className="container flex items-center justify-between relative">
        <Link href="/" className="absolute left-0">
          <Logo />
        </Link>
        <div className="flex justify-end md:justify-center gap-8 w-full py-7">
          <div className="hidden lg:flex">
            <ul className="flex items-center gap-x-10 text-sm  font-monserat font-semibold">
              {links.map((link, index) => (
                <li key={index}>
                  {link.external ? (
                    <Link
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.text}
                    </Link>
                  ) : (
                    <Link href={link.url}>{link.text}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <FontAwesomeIcon
            icon={faBars}
            className="block lg:hidden text-3xl cursor-pointer"
            onClick={() => setShowMenu(true)}
          />
        </div>
        <div
          className={`${showMenu ? "flex" : "hidden"} lg:!hidden items-center justify-center flex-col gap-4 fixed w-full h-full top-0 left-0 bg-[rgb(11,46,60)] z-[2000]`}
        >
          <FontAwesomeIcon
            icon={faClose}
            className="absolute top-4 right-4 text-3xl cursor-pointer"
            onClick={handleCloseMenu}
          />
          <ul className="flex flex-col items-center gap-4 text-2xl list-none">
            {links.map((link, index) => (
              <li key={index}>
                {link.external ? (
                  <Link
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleCloseMenu}
                  >
                    {link.text}
                  </Link>
                ) : (
                  <Link href={link.url} onClick={handleCloseMenu}>
                    {link.text}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <ul className="flex items-center gap-4 text-3xl list-none mt-1">
            {mediaLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  passHref
                  onClick={handleCloseMenu}
                >
                  <FontAwesomeIcon icon={link.icon} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
