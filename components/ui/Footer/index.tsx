import { mediaLinks, docsLinks, links } from "@/lib/links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Logo } from "@/icons";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer py-10 font-monserat">
      <div className=" md:w-[70%] mx-auto text-white flex flex-col sm:flex-row items-center sm:items-start justify-between text-center p-4 gap-8 w-full">
        <div className="flex flex-col items-center gap-10 justify-center">
          <Logo />
          <div>
            <ul className="flex space-x-4 text-3xl list-none justify-center">
              {mediaLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.url} passHref>
                    <span>
                      <FontAwesomeIcon icon={link.icon} />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="container mx-auto">
            <p>© {new Date().getFullYear()} TraitForge Inc.</p>
          </div>
        </div>

        <div className="flex gap-8 w-full justify-center">
          <div className="flex flex-col justify-start">
            <h1 className="mb-2 text-xl text-left">TraitForge</h1>
            <ul className="flex gap-y-1 text-sm list-none text-left justify-center flex-col">
              {links.map((link, index) => (
                <li key={index} className="whitespace-nowrap !capitalize">
                  {link.external ? (
                    <Link
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer"
                    >
                      {link.text}
                    </Link>
                  ) : (
                    <Link className="cursor-pointer" href={link.url}>
                      {link.text}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-start">
            <h1 className="mb-2 text-xl text-left">About</h1>
            <ul className="flex gap-y-1 text-sm list-none text-left justify-center flex-col">
              {docsLinks.map((link, index) => (
                <li key={index} className="whitespace-nowrap capitalize">
                  <Link
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    passHref
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
