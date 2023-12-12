import { Link } from '@inertiajs/react';
import React, { useState } from 'react';

const Menu = () => {

    const [activeMenuIndex, setActiveMenuIndex] = useState(null);

    const toggleSubMenu = (index) => {
        setActiveMenuIndex(activeMenuIndex === index ? null : index);
    };

    const menuItems = [
        {
            name: 'Dashboard',
            icon: 'fas fa-tachometer-alt',
            link: route('dashboard'),
            activeClass: 'active',
            is_same_route: route().current('dashboard') ? 'active' : '',
            // is_submenu: false,
            // subMenu: [
            //     { name: 'Dashboard v1', link: '#', icon: 'far fa-circle' },
            //     { name: 'Dashboard v2', link: '#', icon: 'far fa-circle' },
            //     { name: 'Dashboard v3', link: '#', icon: 'far fa-circle' },
            // ],
        },
        {
            name: 'Category',
            icon: 'fas fa-th',
            link: route('category.index'),
            is_submenu: false,
            is_same_route: route().current('category.index') ? 'active' : '',
        },
        {
            name: 'Demo',
            icon: 'fas fa-th',
            link: route('demo.index'),
            is_submenu: false,
            is_same_route: route().current('demo.index') ? 'active' : '',
        },
        {
            name: 'Layout Options',
            icon: 'fas fa-copy',
            link: '#',
            is_submenu: true,
            subMenu: [
                { name: 'Top Navigation', link: '#', icon: 'far fa-circle' },
            ],
        },
        {
            name: 'Logout',
            icon: 'fas fa-copy',
            link: '/logout',
            is_submenu: false,
        },
        // Add more menu items as needed...
    ];

    return (
        <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                {menuItems.map((item, index) => (
                    <li key={index} onClick={() => toggleSubMenu(index)} className={`nav-item ${activeMenuIndex === index ? 'menu-is-opening menu-open' : ''}`}>
                        <Link href={item.link} className={`nav-link ${item.is_same_route}`}>
                            {/* <i className={`nav-icon ${item.icon}`}></i> */}
                            <p>
                                {item.name}
                                {item.is_submenu && <i className="right fas fa-angle-left"></i>}
                            </p>
                        </Link>
                        <ul className="nav nav-treeview">
                            {item?.subMenu?.map((subMenuItem, subIndex) => (
                                <li key={subIndex} className="nav-item">
                                    <a href={subMenuItem.link} className="nav-link">
                                        {/* <i className="far fa-circle nav-icon"></i> */}
                                        <p>{subMenuItem.name}</p>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Menu;