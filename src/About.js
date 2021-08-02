import SiteNavbar from './components/Navbar/NavigationBar.js';
import SiteFooter from './components/Footer/Footer.js';
import { MenuItems } from './constants/MenuItems.js';

function About() {
    return (
        <>
            <SiteNavbar displayItems={MenuItems} />
            <p>about page test</p>
            <SiteFooter />
        </>
    )
}

export default About;
