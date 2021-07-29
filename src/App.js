import './App.css';
import SiteNavbar from './components/Navbar/NavigationBar.js';
import PageGrid from './components/PageTile/PageTile.js';
import SiteFooter from './components/Footer/Footer.js';
import { MenuItems } from './constants/MenuItems.js';

function App() {
    return (
        <>
            <SiteNavbar displayItems={MenuItems} />
            <PageGrid displayItems={MenuItems} />
            <SiteFooter />
        </>
    )
}

export default App;
