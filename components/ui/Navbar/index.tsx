import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "@/icons";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { links } from "@/lib/links";
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
    <nav className="navbar flex items-center text-white absolute top-0 w-full p-2">
      <Link href="/">
        <Logo />
      </Link>

      <div className="container absolute right-5 flex items-center justify-center gap-8">
        <div className="hidden lg:flex justify-end mr-10">
          <ul className="flex space-x-12 text-base list-none">
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
      </div>
    </nav>
  );
};

export default Navbar;
