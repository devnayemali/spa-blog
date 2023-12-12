import React from 'react';
import Logo from './../../img/AdminLTELogo.png';
import Menu from './Menu';
import { Link } from '@inertiajs/react';

const Sidebar = () => {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <Link href={route('dashboard')} className="brand-link">
                <img src={Logo} alt="AdminLTE Logo" className="brand-image img-circle elevation-3" />
                <span className="brand-text font-weight-light">AdminLTE 3</span>
            </Link>

            <div className="sidebar">
                <div className="form-inline mt-3 mb-3">
                    <div className="input-group" data-widget="sidebar-search">
                        <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                        <div className="input-group-append">
                            <button className="btn btn-sidebar">
                                <i className="fas fa-search fa-fw"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <Menu />
            </div>
        </aside>
    );
};

export default Sidebar;