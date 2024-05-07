import { mediaLinks } from '@/lib/links'; 
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Logo } from '@/icons';
import Link from 'next/link';
 const Footer = () => {
    const router = useRouter();
    return (
        <footer className="footer text-white text-center p-4 w-full">
            <div className="flex flex-col w-3/12 items-center gap-10 justify-center">
            <Logo/>
             <div>
          <ul className="flex space-x-4 text-3xl list-none justify-center">
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
            <div className="container mx-auto">
                <p>© {new Date().getFullYear()} TraitForge Inc.</p>
            </div>
            </div>
        </footer>
    );
}

export default Footer;
