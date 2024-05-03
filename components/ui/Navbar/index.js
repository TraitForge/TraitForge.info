import Link from 'next/link';
import styles from './styles.module.scss';
import { Logo } from '@/icons'
import { useRouter } from 'next/router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faTwitter, faTelegram  } from '@fortawesome/free-brands-svg-icons';

const links = [
    { url: '/', text: 'HOME' },
    { url: '/art', text: 'ART' },
    { url: '/community', text: 'COMMUNITY' },
    { url: '/gameplay', text: 'GAME PLAY' },
    { url: 'https://www.traitforge.game/', text: 'PLAY NOW!' },
  ];

  const mediaLinks = [
    { url: 'https://t.me/+b31jKqlV-1BjNzY1', icon: faTelegram},
    { url: 'https://twitter.com/TraitForge', icon: faTwitter},
    { url: 'https://discord.gg/KWHCEY6zFT', icon: faDiscord},
  ]

const Navbar = () => {
    const router = useRouter();

    return (
        <nav className="navbar text-white fixed top-0 w-full p-2">
            <Link href="/">
              <Logo />
            </Link>
          <div className="container absolute right-5 top-6 flex justify-end">

            <div className="container flex justify-end mr-10 mt-1.5">
            <ul className="flex space-x-7 text-xl list-none">
            {links.map((link, index) => (
            <li key={index}>
              <Link
                className={`${link.url === router.asPath}`}
                href={link.url}
              >
                {link.text}
              </Link>
            </li>
          ))}
          </ul>
            </div>

            <div className="ml-2">
            <ul className="flex space-x-4 text-3xl list-none">
            {mediaLinks.map((link, index) => (
            <li key={index}>
              <Link
                className={`${link.url === router.asPath}`}
                href={link.url}
              >
            <FontAwesomeIcon icon={link.icon}/>
              </Link>
            </li>
          ))}
           </ul>
            </div>
          </div>
        </nav>
    );
};

export default Navbar