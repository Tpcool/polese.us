import About from './about.png';
import Projects from './projects.png';
import Blog from './blog.png';
import Contact from './contact.png';

const ClassLinkName = 'nav-link';
const ClassItemName = 'nav-item';

export const MenuItems = [
    {
        title: 'About',
        url: '#',
        classLinkName: ClassLinkName,
        classItemName: ClassItemName,
        image: About,
        description: 'Background information',
    },
    {
        title: 'Projects',
        url: '#',
        classLinkName: ClassLinkName,
        classItemName: ClassItemName,
        image: Projects,
        description: 'Completed works, including music and programming',
    },
    {
        title: 'Blog',
        url: '#',
        classLinkName: ClassLinkName,
        classItemName: ClassItemName,
        image: Blog,
        description: 'Infrequent musings on life',
    },
    {
        title: 'Contact',
        url: '#',
        classLinkName: ClassLinkName,
        classItemName: ClassItemName,
        image: Contact,
        description: 'Where to reach out',
    },
];
