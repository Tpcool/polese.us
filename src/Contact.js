import SiteNavbar from './components/Navbar/NavigationBar.js';
import SiteFooter from './components/Footer/Footer.js';
import { MenuItems } from './constants/MenuItems.js';

function Contact() {
    return (
        <>
            <SiteNavbar displayItems={MenuItems} />
            <p>contact page test</p>
            <SiteFooter />
        </>
    )
}

export default Contact;
