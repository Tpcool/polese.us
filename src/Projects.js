import SiteNavbar from './components/Navbar/NavigationBar.js';
import SiteFooter from './components/Footer/Footer.js';
import { MenuItems } from './constants/MenuItems.js';

function Projects() {
    return (
        <>
            <SiteNavbar displayItems={MenuItems} />
            <p>projects page test</p>
            <SiteFooter />
        </>
    )
}

export default Projects;
