import React from 'react';
import { NavLink } from 'react-router';

export default function SidebarNav() {

  const navItems = [
    { name: 'About', href: '/' },
    { name: 'Projects', href: '/projects' },
  ];

  const renderNavItems = () => {
    return navItems.map((item) => (
      <li key={item.name}>
        <NavLink to={item.href} className="text-gray-900 font-family-serif text-4xl hover:border-b-4 hover:border-salmon-500">
          {item.name}
        </NavLink>
      </li>
    ));
  };

  return (
    <div className="lg:col-span-2 md:col-span-3 col-span-12 bg-salmon-900 z-10 p-4 gap-5 flex flex-col items-start justify-start">
      <div className="font-family-serif text-2xl mb-4">KDC Portfolio</div>
      <nav>
        <ul className="flex flex-col items-start justify-start gap-3">
          {renderNavItems()}
        </ul>
      </nav>
    </div>
  );
}