import About from '../images/mi_about.png';
import Projects from '../images/mi_projects.png';
import Blog from '../images/mi_blog.png';
import Contact from '../images/mi_contact.png';

const ClassLinkName = 'nav-link';
const ClassItemName = 'nav-item';

export const MenuItems = [
    {
        title: 'About',
        url: '#',
        classLinkName: ClassLinkName,
        classItemName: ClassItemName,
        image: About,
        description: 'All kinds of personal information',
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
