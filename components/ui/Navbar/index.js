import Link from 'next/link';
import { useEffect } from 'react';
import styles from './styles.module.scss';
import { Logo } from '@/icons';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { links, mediaLinks } from '@/lib/links'; 

const Navbar = () => {
  const router = useRouter();

  const handleScroll = (e, anchor) => {
    e.preventDefault();
    const element = document.getElementById(anchor);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (router.asPath.includes('#')) {
      const anchor = router.asPath.substring(router.asPath.indexOf('#') + 1);
      const element = document.getElementById(anchor);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [router.asPath]);

  return (
    <nav className="navbar flex text-white absolute top-0 w-full p-2">
      <Link href="/">
        <Logo />
      </Link>
       <div className="container absolute right-5 flex justify-end">
        <div className="container flex justify-end mr-10 mt-1.5">
        <ul className="flex space-x-7 text-2xl list-none">
        {links.map((link, index) => (
          <li key={index}>
           {link.external ? (
            <a href={link.url} target="_blank" rel="noopener noreferrer">
               {link.text}
             </a>
          ) : (
             <a href={link.url}>{link.text}</a>
        )}
          </li>
         ))}
      </ul>
        </div>
        <div className="m-1">
          <ul className="flex space-x-4 text-3xl list-none">
          {mediaLinks.map((link, index) => (
              <li key={index} className={link.url === router.pathname ? styles.activeLink : ''}>
                <Link href={link.url} passHref>
                  <span>
                    <FontAwesomeIcon icon={link.icon} />
                  </span>
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
