import React, { useState } from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';
import logo from '/home/aero/Demos/frontend/src/demoslogo.jpg';


const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const menuItems = [
	    { name: 'Home', path: '/' },
	    { name: 'Elections', path: '/elections' },
	    { name: 'Legislation', path: '/legislation' },
	    { name: 'Identity', path: '/identity' },
	    { name: 'Help', path: '/help' },
    ];

    return (
        <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
	    <div className="sidebar-header">
	    	{!isCollapsed && <span className="sidebar-title">Demos</span>}
	    	<img src={logo} alt="Demos Logo" className="sidebar-logo" />
            	<button
                className="toggle-button"
                onClick={() => setIsCollapsed(!isCollapsed)}
            	>
                	{isCollapsed ? '→' : '←'}
            	</button>
	    </div>
            <ul className="sidebar-menu">
                {menuItems.map((item, index) => (
                    <li key={index} className="sidebar-item">
                        <NavLink
                            to={item.path}
                            className={({ isActive }) => (isActive ? 'active' : '')}
                        >
                            {item.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
