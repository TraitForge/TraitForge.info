import { mediaLinks, links } from '@/lib/links'; 
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Logo } from '@/icons';
import Link from 'next/link';
 const Footer = () => {
    const router = useRouter();
    return (
        <footer className="footer text-white flex flex-row text-center p-4 w-full">
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

        <div className="w-4/12 absolute right-10 gap-36 flex flex-row">
            <div className="flex flex-col justify-center">
                <h1 className="mb-2 text-lg"> TRAITFORGE </h1>
                <ul className="flex gap-y-1 text-sm list-none text-center justify-center flex-col">
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

            <div className="flex flex-col">
                <h1 className="mb-2 text-lg">ABOUT</h1>  
                <h1 className="mb-2 text-sm">Contact Us</h1>  
                <h1 className="mb-2 text-sm">FAQ</h1>  
                <h1 className="mb-2 text-sm">Privacy Policy</h1>  
                <h1 className="mb-2 text-sm">Terms of Service</h1>  
             </div>
            </div>
        </footer>
    );
}

export default Footer;
