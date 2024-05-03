import Link from 'next/link';
import { Logo } from '@/icons';
import { useRouter } from 'next/router';

const links = [
    { url: '/', text: 'HOME' },
    { url: '/art', text: 'ART' },
    { url: '/community', text: 'COMMUNITY' },
    { url: '/gameplay', text: 'GAME-PLAY' },
    { url: 'https://www.traitforge.game/', text: 'PLAY NOW' },
  ];

const Navbar = () => {
    const router = useRouter();

    return (
        <nav className="navbar bg-gray-800 text-white p-4">
            <Link href="/" className="inline-block">
              <Logo />
            </Link>
            <div className="container mx-auto flex justify-end">
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
            </div>
        </nav>
    );
};

export default Navbar