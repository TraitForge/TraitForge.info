// components/Footer.js
 const Footer = () => {
    return (
        <footer className="footer bg-gray-800 text-white text-center p-4 w-full">
            <div className="container mx-auto">
                <p>© {new Date().getFullYear()} TraitForge. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
