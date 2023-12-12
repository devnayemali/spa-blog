import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import Sidebar from '@/Components/Sidebar';
import Footer from '@/Components/Footer';

export default function Authenticated({ user, header, children }) {
    return (
        <div className="hold-transition sidebar-mini">
            <div className="wrapper">

                {/* navbar */}
                <Navbar />
                {/* navbar */}

                {/* Sidebar  */}
                <Sidebar/>
                {/* Sidebar  */}

                {children}

                <Footer/>
            </div>
        </div>
    )
}
