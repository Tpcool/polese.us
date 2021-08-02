import SiteNavbar from './components/Navbar/NavigationBar.js';
import SiteFooter from './components/Footer/Footer.js';
import { MenuItems } from './constants/MenuItems.js';

function Blog() {
    return (
        <>
            <SiteNavbar displayItems={MenuItems} />
            <p>blog page test</p>
            <SiteFooter />
        </>
    )
}

export default Blog;
