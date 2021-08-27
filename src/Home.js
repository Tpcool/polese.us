import './Home.css';
import PageGrid from './components/PageTile/PageTile.js';
import { MenuItems } from './constants/MenuItems.js';

function Home() {
    return (
        <PageGrid displayItems={MenuItems} />
    )
}

export default Home;
