import './Home.css';
import SiteNavbar from './components/Navbar/NavigationBar.js';
import PageGrid from './components/PageTile/PageTile.js';
import SiteFooter from './components/Footer/Footer.js';
import { MenuItems } from './constants/MenuItems.js';

function Home() {
    return (
        <>
            <SiteNavbar displayItems={MenuItems} />
            <PageGrid displayItems={MenuItems} />
            <SiteFooter />
        </>
    )
}

export default Home;
