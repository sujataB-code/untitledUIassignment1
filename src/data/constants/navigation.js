import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

export const menuItems = [
    {
        id: 1,
        title: "Home",
        icons: '',
        target: "/"
    },
    {
        id: 2,
        title: "Products",
        icons: <MdOutlineKeyboardArrowDown />,
        target: "/products"
    },
    {
        id: 3,
        title: "Resources",
        icons: <MdOutlineKeyboardArrowDown />,
        target: "/resources"
    },
    {
        id: 4,
        title: "Pricing",
        icons: '',
        target: "/pricing"
    }
]
