// Image import
import HomeImage from '../images/mi_home.gif';
import AboutImage from '../images/mi_about.png';
import ProjectsImage from '../images/mi_projects.png';
import BlogImage from '../images/mi_blog.png';
import ContactImage from '../images/mi_contact.png';
// Component import
import HomePage from '../Home.js';
import AboutPage from '../About.js';
import ProjectsPage from '../Projects.js';
import BlogPage from '../Blog.js';
import ContactPage from '../Contact.js';

// Class constants
const ClassLinkName = 'nav-link';
const ClassItemName = 'nav-item';

export const MenuItems = [
    {
        title: 'Home',
        path: '/home',
        component: HomePage,
        classLinkName: ClassLinkName,
        classItemName: ClassItemName,
        image: HomeImage,
        description: 'Return to the home directory',
    },
    {
        title: 'About',
        path: '/about',
        component: AboutPage,
        classLinkName: ClassLinkName,
        classItemName: ClassItemName,
        image: AboutImage,
        description: 'All kinds of personal information',
    },
    {
        title: 'Projects',
        path: '/projects',
        component: ProjectsPage,
        classLinkName: ClassLinkName,
        classItemName: ClassItemName,
        image: ProjectsImage,
        description: 'Completed works, including music and programming',
    },
    {
        title: 'Blog',
        path: '/blog',
        component: BlogPage,
        classLinkName: ClassLinkName,
        classItemName: ClassItemName,
        image: BlogImage,
        description: 'Infrequent musings on life',
    },
    {
        title: 'Contact',
        path: '/contact',
        component: ContactPage,
        classLinkName: ClassLinkName,
        classItemName: ClassItemName,
        image: ContactImage,
        description: 'Where to reach out',
    },
];
