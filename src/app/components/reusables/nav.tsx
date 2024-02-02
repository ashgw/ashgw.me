import Link from 'next/link';

import React from 'react';
import { Button } from '../ui/button';
const navItems = {
  '/': {
    name: 'Home',
  },
  '/work': {
    name: 'Work',
  },
  '/blog': {
    name: 'Blog',
  },
  '/yap': {
    name: 'Yap',
  },
};

export function Navbar() {
  return (
    <nav className="p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="font-bold text-xl">A S H G W</div>
        <div className="space-x-4">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Button key={path}>
              <Link key={path} href={path}>
                {name}
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
}